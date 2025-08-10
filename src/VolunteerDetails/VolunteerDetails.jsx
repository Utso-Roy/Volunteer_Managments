import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import BeAVolunteers from "../BeAVolunteers/BeAVolunteers";
import Loading from "../Loading/Loading";

const VolunteerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
    <div className="max-w-5xl mx-auto p-6 my-10 bg-gradient-to-r from-blue-50 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-lg shadow-lg transition-colors duration-300">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-[#0267af] dark:text-blue-400 font-semibold mb-4 hover:underline"
      >
        <FaArrowLeft /> Back
      </button>

      {!post ? (
        <Loading />
      ) : (
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <img
              src={post?.thumbnail}
              alt={post?.title}
              className="w-full h-64 sm:h-80 lg:h-full object-cover rounded"
            />
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mt-2 lg:mt-0 dark:text-white">
                {post?.title}
              </h2>

              <div className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
                <p>
                  <strong className="dark:text-white">Category:</strong>{" "}
                  {post?.category}
                </p>
                <p>
                  <strong className="dark:text-white">Description:</strong>{" "}
                  {post?.description}
                </p>
                <p>
                  <strong className="dark:text-white">
                    Volunteers Needed:
                  </strong>{" "}
                  {post?.volunteersNeeded}
                </p>
                <p>
                  <strong className="dark:text-white">Deadline:</strong>{" "}
                  {new Date(post?.deadline).toLocaleString()}
                </p>
                <p>
                  <strong className="dark:text-white">Organizer Name:</strong>{" "}
                  {post?.organizerName}
                </p>
                <p>
                  <strong className="dark:text-white">Organizer Email:</strong>{" "}
                  <a
                    href={`mailto:${post?.organizerEmail}`}
                    className="text-blue-600 dark:text-blue-400 underline"
                  >
                    {post?.organizerEmail}
                  </a>
                </p>
              </div>
            </div>

            {/* Button */}
            <button
              onClick={handleVolunteerClick}
              className="mt-6 w-full  cursor-pointer font-semibold py-3 rounded btn btn-outline text-[#0267af] hover:bg-[#0267af] hover:text-white"
            >
              Be a Volunteer
            </button>
          </div>
        </div>
      )}

      {showModal && (
        <BeAVolunteers post={post} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default VolunteerDetails;
