import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import BeAVolunteers from "../BeAVolunteers/BeAVolunteers";

const VolunteerDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch(`https://volunteer-server-six.vercel.app/volunteerSingleData`)
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item._id === id);
        setPost(found);
      });
  }, [id]);

  const handleVolunteerClick = () => {
    if (!post) return;
    setShowModal(true);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 my-10 border-2 border-[#0267af] bg-white rounded-lg shadow-lg">
      {!post ? (
        <span className="loading block mx-auto loading-bars loading-xl"></span>
      ) : (
        <>
          <img
            src={post.thumbnail}
            alt={post.title}
            className="w-full h-64 object-cover rounded"
          />

          <h2 className="text-3xl font-bold mt-6">{post.title}</h2>

          <div className="mt-4 space-y-2 text-gray-700">
            <p>
              <strong>Category:</strong> {post.category}
            </p>
            <p>
              <strong>Description:</strong> {post.description}
            </p>
            <p>
              <strong>Volunteers Needed:</strong> {post.volunteersNeeded}
            </p>
            <p>
              <strong>Deadline:</strong>{" "}
              {new Date(post.deadline).toLocaleString()}
            </p>
            <p>
              <strong>Organizer Name:</strong> {post.organizerName}
            </p>
            <p>
              <strong>Organizer Email:</strong>{" "}
              <a
                href={`mailto:${post.organizerEmail}`}
                className="text-blue-600 underline"
              >
                {post.organizerEmail}
              </a>
            </p>
          </div>

          <button
            onClick={handleVolunteerClick}
            className="mt-6 w-full bg-[#0267af] cursor-pointer text-white font-semibold py-3 rounded hover:bg-[#0267afdc] transition"
          >
            Be a Volunteer
          </button>
        </>
      )}

      {showModal && (
        <BeAVolunteers post={post} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default VolunteerDetails;
