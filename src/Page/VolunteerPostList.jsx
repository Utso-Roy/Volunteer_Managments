import React, { useEffect, useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import Loading from "../Loading/Loading";

const VolunteerPostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("http://localhost:3000/volunteerAddPosts");
        if (!res.ok) throw new Error("Failed to fetch volunteer posts");
        const data = await res.json();
        setPosts(data.data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
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
      const res = await fetch(`http://localhost:3000/volunteerAddPosts/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        Swal.fire("Deleted!", "Your volunteer post has been deleted.", "success");
        setPosts((prev) => prev.filter((item) => item._id !== id));
      } else {
        Swal.fire("Failed", data.message || "Deletion failed.", "error");
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Something went wrong while deleting.", "error");
    }
  };

  const handleUpdate = async (post) => {
    const { value: formValues } = await Swal.fire({
      title: "Update Volunteer Post",
      html: `
        <input id="title" class="swal2-input" placeholder="Title" value="${post.title}">
        <input id="category" class="swal2-input" placeholder="Category" value="${post.category}">
        <input id="volunteersNeeded" type="number" class="swal2-input" placeholder="Volunteers Needed" value="${post.volunteersNeeded}">
        <input id="deadline" type="date" class="swal2-input" value="${new Date(post.deadline).toISOString().split("T")[0]}">
      `,
      focusConfirm: false,
      showCancelButton: true,
      preConfirm: () => {
        return {
          title: document.getElementById("title").value,
          category: document.getElementById("category").value,
          volunteersNeeded: parseInt(document.getElementById("volunteersNeeded").value),
          deadline: document.getElementById("deadline").value,
        };
      },
    });

    if (!formValues) return;

    try {
      const res = await fetch(`http://localhost:3000/volunteerAddPosts/${post._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });
      const result = await res.json();
      if (result.success) {
        Swal.fire("Updated!", "Volunteer post updated successfully.", "success");
        setPosts((prev) =>
          prev.map((item) => (item._id === post._id ? { ...item, ...formValues } : item))
        );
      } else {
        Swal.fire("Error!", result.message || "Update failed.", "error");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error!", "Something went wrong.", "error");
    }
  };

  if (loading)
    return (
    <Loading></Loading>
    );

  if (error)
    return (
      <div className="bg-red-100 border-l-4 border-red-500 text-red-800 p-4">
        Error: {error}
      </div>
    );

  return (
    <section className="max-w-4xl overflow-y-auto max-h-[500px] mx-auto   py-5 pl-20 md:pl-12">
      <h2 className="text-2xl text-center font-semibold mb-6 text-[#014f86]  pl-3">
        My Volunteer Posts
      </h2>

      {posts.length === 0 ? (
        <div className="bg-blue-100  border-l-4 border-blue-500 text-blue-800 p-5 rounded">
          No volunteer posts available.
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-4 md:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post?._id}
              className="card  bg-white dark:bg-gray-800 dark:border-2 dark:border-blue-300 p-4 shadow-sm rounded"
            >
              <figure>
                <img
                  src={post?.thumbnail}
                  alt={post?.title}
                  className="rounded mb-4 object-cover w-full h-40"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-lg font-semibold">{post?.title}</h3>
                <p>
                  Category: <strong>{post?.category}</strong>
                </p>
                <p>Volunteers Needed: {post?.volunteersNeeded}</p>
                <div className="flex gap-1">
                  <button
                    onClick={() => handleUpdate(post)}
                    className="bg-[#0267af] cursor-pointer text-white px-3 py-1.5 rounded hover:bg-[#0267afb6]"
                  >
                    <FaEdit className="inline" />
                  </button>
                  <button
                    onClick={() => handleDelete(post?._id)}
                    className="bg-red-500 cursor-pointer text-white px-3 py-1.5 rounded hover:bg-red-600"
                  >
                    <FaTrash className="inline " /> 
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default VolunteerPostList;
