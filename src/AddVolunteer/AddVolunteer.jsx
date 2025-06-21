import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const AddVolunteer = () => {
  const { user } = useContext(AuthContext);

  const handleAddPost = async (e) => {
    e.preventDefault();
    const form = e.target;

    const postData = {
      thumbnail: form.thumbnail.value,
      title: form.title.value,
      description: form.description.value,
      category: form.category.value,
      location: form.location.value,
      volunteersNeeded: parseInt(form.volunteers.value),
      deadline: form.deadline.value,
      organizerName: user?.displayName,
      organizerEmail: user?.email,
    };

    try {
      const res = await fetch(
        "https://volunteer-server-six.vercel.app/volunteerAddPosts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(postData),
        }
      );

      const data = await res.json();

      if (data.insertedId) {
        Swal.fire("Success!", "Your volunteer post has been added.", "success");
        form.reset();
      } else {
        Swal.fire("Error!", "Something went wrong.", "error");
      }
    } catch (err) {
      console.error(err);
      Swal.fire("Error!", "Server error occurred.", "error");
    }
  };

  return (
    <div className="min-h-screen bg-[#509fd7f0] p-4 flex items-center justify-center">
      <form
        onSubmit={handleAddPost}
        className="space-y-4 w-full max-w-xl p-6 shadow-md bg-white rounded-xl"
      >
        <input
          type="text"
          name="thumbnail"
          placeholder="Thumbnail URL"
          className="input input-bordered w-full"
          required
        />

        <input
          type="text"
          name="title"
          placeholder="Post Title"
          className="input input-bordered w-full"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          className="textarea textarea-bordered w-full"
          required
        ></textarea>

        <select
          name="category"
          className="select select-bordered w-full"
          required
        >
          <option value="">Select Category</option>
          <option>healthcare</option>
          <option>education</option>
          <option>social service</option>
          <option>animal welfare</option>
        </select>

        <input
          type="text"
          name="location"
          placeholder="Location"
          className="input input-bordered w-full"
          required
        />

        <input
          type="number"
          name="volunteers"
          placeholder="Number of Volunteers Needed"
          className="input input-bordered w-full"
          required
        />

        <div className="w-full">
          <label className="block mb-1 font-medium text-gray-700">
            Deadline
          </label>
          <input
            type="date"
            name="deadline"
            className="input input-bordered w-full"
            required
          />
        </div>

        <input
          type="text"
          name="organizerName"
          value={user?.displayName || ""}
          readOnly
          className="input input-bordered w-full"
        />

        <input
          type="email"
          name="organizerEmail"
          value={user?.email || ""}
          readOnly
          className="input input-bordered w-full"
        />

        <button
          type="submit"
          className="btn bg-[#0267af] text-white hover:bg-[#014f86] w-full"
        >
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddVolunteer;
