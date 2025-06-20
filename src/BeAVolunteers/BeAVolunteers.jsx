import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";

const BeAVolunteers = ({ post, onClose }) => {
  const { user } = useContext(AuthContext);

  if (!post) return null;

  const handleRequest = (e) => {
    e.preventDefault();
    const form = e.target;
    const suggestion = form.suggestion.value;

    const requestData = {
      postId: post._id,
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

    console.log("Volunteer Request Data:", requestData);

    Swal.fire(
      "Request Sent!",
      "You have successfully requested to volunteer.",
      "success"
    );
    form.reset();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-1500 flex items-center justify-center bg-[#0267af] bg-opacity-50 p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-8 relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl btn  font-semibold text-gray-500 hover:text-red-600 transition"
          aria-label="Close modal"
        >
          &times;
        </button>

        <h2 className="text-3xl font-bold text-center mb-8 my-8 text-[#0267af]">
          Volunteer Request Form
        </h2>

        <form onSubmit={handleRequest} className="space-y-6">
          {/* Thumbnail */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Thumbnail
            </label>
            <input
              type="text"
              readOnly
              value={post.thumbnail}
              className="w-full rounded border border-gray-300 px-3 py-2 bg-gray-100 cursor-not-allowed text-gray-600"
            />
          </div>

          {/* Title */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Post Title
            </label>
            <input
              type="text"
              readOnly
              value={post.title}
              className="w-full rounded border border-gray-300 px-3 py-2 bg-gray-100 cursor-not-allowed text-gray-600"
            />
          </div>

          {/* Description */}
         <div>
  <label className="block mb-1 font-semibold text-gray-700">
    Description
  </label>
  <textarea
    readOnly
    value={
      post.description
        ? post.description
        : "A form where users can apply to join a volunteer opportunity by submitting their details and suggestions."
    }
    rows={4}
    className="w-full rounded border border-gray-300 px-3 py-2 bg-gray-100 cursor-not-allowed text-gray-600 resize-none"
  />
</div>


          {/* Category */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Category
            </label>
            <input
              type="text"
              readOnly
              value={post.category}
              className="w-full rounded border border-gray-300 px-3 py-2 bg-gray-100 cursor-not-allowed text-gray-600"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Location
            </label>
            <input
              type="text"
              readOnly
              value={post.location || "Bangladesh"}
              className="w-full rounded border border-gray-300 px-3 py-2 bg-gray-100 cursor-not-allowed text-gray-600"
            />
          </div>

          {/* Volunteers Needed */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              No. of Volunteers Needed
            </label>
            <input
              type="number"
              readOnly
              value={post.volunteersNeeded || 6}
              className="w-full rounded border border-gray-300 px-3 py-2 bg-gray-100 cursor-not-allowed text-gray-600"
            />
          </div>

          {/* Deadline */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Deadline
            </label>
            <input
              type="text"
              readOnly
              value={new Date(post.deadline).toLocaleDateString()}
              className="w-full rounded border border-gray-300 px-3 py-2 bg-gray-100 cursor-not-allowed text-gray-600"
            />
          </div>

          {/* Organizer Name */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Organizer Name
            </label>
            <input
              type="text"
              readOnly
              value={post.organizerName || 'N/A'}
              className="w-full rounded border border-gray-300 px-3 py-2 bg-gray-100 cursor-not-allowed text-gray-600"
            />
          </div>

          {/* Organizer Email */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Organizer Email
            </label>
            <input
              type="email"
              readOnly
              value={post.organizerEmail || 'N/A'}
              className="w-full rounded border border-gray-300 px-3 py-2 bg-gray-100 cursor-not-allowed text-gray-600"
            />
          </div>

          {/* Volunteer Name */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              readOnly
              value={user?.displayName || ""}
              className="w-full rounded border border-gray-300 px-3 py-2 bg-gray-100 cursor-not-allowed text-gray-600"
            />
          </div>

          {/* Volunteer Email */}
          <div>
            <label className="block mb-1 font-semibold text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              readOnly
              value={user?.email || ""}
              className="w-full rounded border border-gray-300 px-3 py-2 bg-gray-100 cursor-not-allowed text-gray-600"
            />
          </div>

          {/* Suggestion */}
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

          {/* Status */}
          <input type="hidden" name="status" value="requested" />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#0267af] text-white font-semibold py-3 rounded hover:bg-[#014f86] transition"
          >
            Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default BeAVolunteers;
