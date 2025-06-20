import React, { useEffect, useState } from "react";
import {
  FaRegCalendarCheck,
  FaTrash,
  FaEdit,
  FaSpinner,
} from "react-icons/fa";
import Swal from "sweetalert2";

const ManagePost = () => {
  const [postData, setPostData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/volunteerRequest");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setPostData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDeletBtn = async (id) => {
    const confirmResult = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (!confirmResult.isConfirmed) return;

    try {
      const response = await fetch(
        `http://localhost:3000/volunteerRequest/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (data.success) {
        Swal.fire("Deleted!", "Your volunteer request has been deleted.", "success");
        setPostData((prev) => prev.filter((item) => item._id !== id));
      } else {
        Swal.fire("Failed", data.message || "Deletion failed.", "error");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
      Swal.fire("Error", "Something went wrong while deleting.", "error");
    }
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedPost = {
      title: form.title.value,
      category: form.category.value,
      volunteersNeeded: parseInt(form.volunteersNeeded.value),
      deadline: form.deadline.value,
    };

    try {
      const res = await fetch(
        `http://localhost:3000/volunteerRequest/${selectedPost._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedPost),
        }
      );

      const result = await res.json();

      if (result.success) {
        Swal.fire("Updated!", "The post has been updated.", "success");
        setPostData((prev) =>
          prev.map((item) =>
            item._id === selectedPost._id ? { ...item, ...updatedPost } : item
          )
        );
        setIsUpdateModalOpen(false);
      } else {
        Swal.fire("Error", result.message || "Update failed.", "error");
      }
    } catch (error) {
      console.error("Update error:", error);
      Swal.fire("Error", "Something went wrong during update.", "error");
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-64">
        <FaSpinner className="animate-spin text-4xl text-[#0267af]" />
      </div>
    );
  if (error)
    return (
      <div className="bg-red-100 border-l-4 border-red-500 text-red-800 p-4">
        Error: {error}
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center text-[#0267af] mb-12">
        Volunteer Request Posts
      </h1>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-[#014f86] border-l-4 border-[#0267af] pl-3">
           All Volunteer Requests
        </h2>

        {postData.length === 0 ? (
          <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-5 rounded">
            No volunteer requests available.
          </div>
        ) : (
          <div className="overflow-hidden rounded-xl border border-gray-200 shadow-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gradient-to-r from-[#0267af] to-[#014f86]">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Title</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Organizer</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Category</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Deadline</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-white">Volunteers Needed</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-white">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {postData.map((post) => (
                  <tr key={post._id} className="transition-all duration-150 hover:bg-gray-50/90">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{post.title}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{post.organizerName}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{post.category}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      <FaRegCalendarCheck className="inline mr-1 text-[#014f86]" />
                      {new Date(post.deadline).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">{post.volunteersNeeded}</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center space-x-2">
                        <button
                          onClick={() => {
                            setSelectedPost(post);
                            setIsUpdateModalOpen(true);
                          }}
                          className="bg-[#0267af] cursor-pointer text-white px-3 py-1.5 rounded hover:bg-[#0267af90]"
                        >
                          <FaEdit className="inline mr-1" /> Edit
                        </button>
                        <button
                          onClick={() => handleDeletBtn(post._id)}
                          className="bg-red-500 cursor-pointer text-white px-3 py-1.5 rounded hover:bg-red-600"
                        >
                          <FaTrash className="inline mr-1" /> Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Update Modal */}
      {isUpdateModalOpen && selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md relative">
            <button
              onClick={() => setIsUpdateModalOpen(false)}
              className="absolute top-2 right-4 text-2xl font-bold text-gray-500 hover:text-red-500"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold text-[#0267af] mb-4 text-center">
              Update Volunteer Request
            </h2>

            <form onSubmit={handleUpdateSubmit} className="space-y-4">
              <input
                type="text"
                name="title"
                defaultValue={selectedPost.title}
                className="w-full border p-2 rounded"
                placeholder="Title"
              />
              <input
                type="text"
                name="category"
                defaultValue={selectedPost.category}
                className="w-full border p-2 rounded"
                placeholder="Category"
              />
              <input
                type="number"
                name="volunteersNeeded"
                defaultValue={selectedPost.volunteersNeeded}
                className="w-full border p-2 rounded"
                placeholder="Volunteers Needed"
              />
              <input
                type="date"
                name="deadline"
                defaultValue={new Date(selectedPost.deadline).toISOString().substr(0, 10)}
                className="w-full border p-2 rounded"
              />
              <button
                type="submit"
                className="w-full bg-[#0267af] text-white py-2 rounded hover:bg-[#014f86]"
              >
                Update Post
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManagePost;