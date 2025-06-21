import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import BeAVolunteers from "../BeAVolunteers/BeAVolunteers";

const AllVolunteerDetails = () => {
  const { id } = useParams();
  const [volunteerData, setVolunteerData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("https://volunteer-server-six.vercel.app/volunteerAddPosts")
      .then((res) => res.json())
      .then((data) => setVolunteerData(data.data || data));
  }, []);

  const post = volunteerData.find((p) => p._id === id);

  const handleVolunteerClick = () => {
    setShowModal(true);
  };

  if (!post) {
    return (
      <p className="text-center text-gray-500 mt-10">
        Loading volunteer details...
      </p>
    );
  }

  return (
    <div className="max-w-2xl  mx-auto p-6">
      <div className="bg-white border-2 border-[#0267af] p-4 rounded-lg shadow-lg overflow-hidden">
        <img
          src={post.thumbnail}
          alt={post.title}
          className="w-full h-64 object-cover"
        />
        <div className=" my-4 space-y-2">
          <h2 className="text-3xl font-bold text-[#0267af]">{post.title}</h2>
          <p className="text-gray-700">
            <strong>Description:</strong> {post.description}
          </p>
          <p className="text-gray-700">
            <strong>Category:</strong> {post.category}
          </p>
          <p className="text-gray-700">
            <strong>Location:</strong> {post.location}
          </p>
          <p className="text-gray-700">
            <strong>Volunteers Needed:</strong> {post.volunteersNeeded}
          </p>
          <p className="text-gray-700">
            <strong>Deadline:</strong>{" "}
            {new Date(post.deadline).toLocaleDateString()}
          </p>
          <p className="text-gray-700">
            <strong>Organizer:</strong> {post.organizerName} (
            {post.organizerEmail})
          </p>

          <div className="pt-4">
            <button
              onClick={handleVolunteerClick}
              className="mt-6 w-full bg-[#0267af] cursor-pointer text-white font-semibold py-3 rounded hover:bg-[#0267afdc] transition"
            >
              Be a Volunteer
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <BeAVolunteers post={post} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default AllVolunteerDetails;
