import React, { useEffect, useState } from "react";
import { FaRegCalendarCheck, FaTrash, FaEdit, FaSpinner } from "react-icons/fa";
import Swal from "sweetalert2";
import Loading from "../Loading/Loading";

const VolunteerRequestList = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await fetch(
          "https://volunteer-server-six.vercel.app/volunteerRequest"
        );
        if (!res.ok) throw new Error("Failed to fetch volunteer requests");
        const data = await res.json();
        setRequests(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  const handleDelete = async (id) => {
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
      const res = await fetch(
        `https://volunteer-server-six.vercel.app/volunteerRequest/${id}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      if (data.success) {
        Swal.fire(
          "Deleted!",
          "Your volunteer request has been deleted.",
          "success"
        );
        setRequests((prev) => prev.filter((item) => item._id !== id));
      } else {
        Swal.fire("Failed", data.message || "Deletion failed.", "error");
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Something went wrong while deleting.", "error");
    }
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedRequest = {
      title: form.title.value,
      category: form.category.value,
      volunteersNeeded: parseInt(form.volunteersNeeded.value),
      deadline: form.deadline.value,
    };

    try {
      const res = await fetch(
        `https://volunteer-server-six.vercel.app/volunteerRequest/${selectedRequest._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedRequest),
        }
      );
      const result = await res.json();

      if (result.success) {
        Swal.fire("Updated!", "The request has been updated.", "success");
        setRequests((prev) =>
          prev.map((item) =>
            item._id === selectedRequest._id
              ? { ...item, ...updatedRequest }
              : item
          )
        );
        setIsUpdateModalOpen(false);
      } else {
        Swal.fire("Error", result.message || "Update failed.", "error");
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Something went wrong during update.", "error");
    }
  };

  if (loading) return <Loading></Loading>;
  if (error)
    return (
      <div className="bg-red-100 border-l-4 border-red-500 text-red-800 p-4 max-w-4xl mx-auto">
        Error: {error}
      </div>
    );

  return (
    <section className="max-w-4xl overflow-y-auto max-h-[500px]  mx-auto px-4 pl-12 sm:px-6 lg:px-8 py-5 space-y-6">
      <h2 className="text-2xl font-semibold text-center mb-6 text-[#014f86] pl-3 ">
        My Volunteer Requests
      </h2>

      {requests.length === 0 ? (
        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-5 rounded max-w-4xl mx-auto">
          No volunteer requests available.
        </div>
      ) : (
        <div className="rounded-xl border border-gray-200 shadow-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#0267af] dark:bg-[#1d232a]">
              <tr>
                <th className="px-4 py-3 text-left text-xs sm:text-sm text-white font-semibold whitespace-nowrap">
                  Title
                </th>
                <th className="px-4 py-3 text-left text-xs sm:text-sm text-white font-semibold whitespace-nowrap">
                  Organizer
                </th>
                <th className="px-4 py-3 text-left text-xs sm:text-sm text-white font-semibold whitespace-nowrap">
                  Category
                </th>
                <th className="px-4 py-3 text-left text-xs sm:text-sm text-white font-semibold whitespace-nowrap">
                  Deadline
                </th>
                <th className="px-4 py-3 text-left text-xs sm:text-sm text-white font-semibold whitespace-nowrap">
                  Needed
                </th>
                <th className="px-4 py-3 text-center text-xs sm:text-sm text-white font-semibold">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:bg-[#1d232a] bg-white">
              {requests.map((post) => (
                <tr
                  key={post._id}
                  className="transition-all duration-150 dark:hover:bg-blue-300 hover:bg-gray-50/90"
                >
                  <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {post.title}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 dark:text-white whitespace-nowrap">
                    {post.organizerName}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 dark:text-white whitespace-nowrap">
                    {post.category}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 dark:text-white whitespace-nowrap">
                    <FaRegCalendarCheck className="inline mr-1 text-[#014f86]" />
                    {new Date(post.deadline).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-700 dark:text-white whitespace-nowrap">
                    {post.volunteersNeeded}
                  </td>
                  <td className="px-4 py-3 text-center whitespace-nowrap">
                    <div className="flex justify-center space-x-2">
                      <button
                        onClick={() => {
                          setSelectedRequest(post);
                          setIsUpdateModalOpen(true);
                        }}
                        className="bg-[#0267af] cursor-pointer text-white px-3 py-1.5 rounded hover:bg-[#0267af90]"
                      >
                        <FaEdit className="inline " />
                      </button>
                      <button
                        onClick={() => handleDelete(post._id)}
                        className="bg-red-500 cursor-pointer text-white px-3 py-1.5 rounded hover:bg-red-600"
                      >
                        <FaTrash className="inline " />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {isUpdateModalOpen && selectedRequest && (
        <div className="fixed inset-0 z-50  flex items-center justify-center bg-gray-800 bg-opacity-50 px-4">
          <div className="bg-white p-6  rounded-lg shadow-xl w-full max-w-md relative">
            <button
              onClick={() => setIsUpdateModalOpen(false)}
              className="absolute top-2 cursor-pointer right-4 text-2xl font-bold text-gray-500 hover:text-red-500"
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold text-[#0267af] mb-4 text-center">
              Update Volunteer Request
            </h2>

            <form onSubmit={handleUpdateSubmit} className="space-y-4 ">
              <input
                type="text"
                name="title"
                defaultValue={selectedRequest.title}
                className="w-full border p-2 rounded"
                placeholder="Title"
                required
              />
              <input
                type="text"
                name="category"
                defaultValue={selectedRequest.category}
                className="w-full border p-2 rounded"
                placeholder="Category"
                required
              />
              <input
                type="number"
                name="volunteersNeeded"
                defaultValue={selectedRequest.volunteersNeeded}
                className="w-full border p-2 rounded"
                placeholder="Volunteers Needed"
                min={1}
                required
              />
              <input
                type="date"
                name="deadline"
                defaultValue={new Date(selectedRequest.deadline)
                  .toISOString()
                  .substr(0, 10)}
                className="w-full border p-2 rounded"
                required
              />
              <button
                type="submit"
                className="w-full btn btn-outline border-2 text-[#014f86] py-2 rounded hover:text-white hover:bg-[#014f86] "
              >
                Update Post
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default VolunteerRequestList;
