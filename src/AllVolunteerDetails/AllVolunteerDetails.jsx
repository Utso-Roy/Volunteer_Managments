import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router"; 
import { IoArrowBack } from "react-icons/io5"; 
import BeAVolunteers from "../BeAVolunteers/BeAVolunteers";
import Loading from "../Loading/Loading";

const AllVolunteerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [volunteerData, setVolunteerData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/volunteerAddPosts")
      .then((res) => res.json())
      .then((data) => setVolunteerData(data.data || data));
  }, []);

  const post = volunteerData.find((p) => p._id === id);

  const handleVolunteerClick = () => {
    setShowModal(true);
  };

  if (!post) {
    return (
     <Loading></Loading>
    );
  }

  return (
    <div className="max-w-6xl bg-gradient-to-r from-blue-50 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 my-4 mx-auto p-6">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center cursor-pointer gap-2  mb-4 text-[#0267af] dark:text-blue-300 hover:underline"
      >
        <IoArrowBack size={22} />
        Back
      </button>

      <div className=" dark:bg-[#1d232a] dark:border-blue-300 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={post?.thumbnail}
            alt={post?.title}
            className="w-full h-64 md:h-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold text-[#0267af] dark:text-blue-300">
              {post?.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Description:</strong> {post?.description}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Category:</strong> {post?.category}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Location:</strong> {post?.location}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Volunteers Needed:</strong> {post?.volunteersNeeded}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Deadline:</strong>{" "}
              {new Date(post?.deadline).toLocaleDateString()}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Organizer:</strong> {post?.organizerName} (
              {post?.organizerEmail})
            </p>
          </div>

          <div className="pt-6">
            <button
              onClick={handleVolunteerClick}
              className="w-full btn btn-outline text-[#0267af] hover:bg-[#0267af] hover:text-white"
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
