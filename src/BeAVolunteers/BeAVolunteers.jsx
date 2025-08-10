import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";

const BeAVolunteers = ({ post, onClose }) => {
  const { user } = useContext(AuthContext);

  if (!post) return null;

const handleRequest = async (e) => {
  e.preventDefault();
  const form = e.target;
  const suggestion = form.suggestion.value;

  const requestData = {
    postId: post.id,
    thumbnail: post.thumbnail,
    title: post.title,
    description: post.description,
    category: post.category,
    location: post.location,
    volunteersNeeded: post.volunteersNeeded,
    deadline: post.deadline,
    organizerName: post.organizerName,
    organizerEmail: post.organizerEmail,
    volunteerName: user.displayName,
    volunteerEmail: user.email,
    suggestion,
    status: "requested",
  };

  try {
    const res = await fetch("http://localhost:3000/volunteerRequest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    const data = await res.json();

    if (data.success) {
      Swal.fire(
        "Request Sent!",
        "You have successfully requested to volunteer.",
        "success"
      );

      form.reset();
      onClose(); 
    } else {
      Swal.fire("Error", "Something went wrong.", "error");
    }
  } catch (error) {
    console.error("Error:", error);
    Swal.fire("Error", "Server error occurred", "error");
  }
};

  return (
    <div className="fixed inset-0 z-1500 flex items-center justify-center bg-[#0267af] bg-opacity-50 p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-8 relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl btn font-semibold text-gray-500 hover:text-red-600 transition"
          aria-label="Close modal"
        >
          &times;
        </button>

        <h2 className="text-3xl font-bold text-center mb-8 my-8 text-[#0267af]">
          Volunteer Request Form
        </h2>

        <form onSubmit={handleRequest} className="space-y-6">
          {[
            { label: "Thumbnail", value: post.thumbnail },
            { label: "Post Title", value: post.title },
            {
              label: "Description",
              value:
                post.description ||
                "A form where users can apply to join a volunteer opportunity.",
              textarea: true,
              rows: 4,
            },
            { label: "Category", value: post.category },
            { label: "Location", value: post.location || "Bangladesh" },
            {
              label: "No. of Volunteers Needed",
              value: post.volunteersNeeded || 6,
            },
            {
              label: "Deadline",
              value: new Date(post.deadline).toLocaleDateString(),
            },
            {
              label: "Organizer Name",
              value: post.organizerName || "N/A",
            },
            {
              label: "Organizer Email",
              value: post.organizerEmail || "N/A",
              type: "email",
            },
            {
              label: "Your Name",
              value: user?.displayName || "",
            },
            {
              label: "Your Email",
              value: user?.email || "",
              type: "email",
            },
          ].map((field, index) => (
            <div key={index}>
              <label className="block mb-1 font-semibold text-gray-700">
                {field.label}
              </label>
              {field.textarea ? (
                <textarea
                  readOnly
                  value={field.value}
                  rows={field.rows}
                  className="w-full rounded border border-gray-300 px-3 py-2 bg-gray-100 cursor-not-allowed text-gray-600 resize-none"
                />
              ) : (
                <input
                  type={field.type || "text"}
                  readOnly
                  value={field.value}
                  className="w-full rounded border border-gray-300 px-3 py-2 bg-gray-100 cursor-not-allowed text-gray-600"
                />
              )}
            </div>
          ))}

          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Suggestion (optional)
            </label>
            <textarea
              name="suggestion"
              placeholder="Your suggestion here..."
              rows={3}
              className="w-full rounded border border-gray-300 px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <input type="hidden" name="status" value="requested" />

          <button
            type="submit"
            className="w-full btn btn-outline text-[#0267af] hover:bg-[#0267af] hover:text-white"
          >
            Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default BeAVolunteers;
