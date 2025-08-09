import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import BeAVolunteers from "../BeAVolunteers/BeAVolunteers";
import Loading from "../Loading/Loading";

const VolunteerDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/volunteerSingleData`)
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
    <div className="max-w-5xl mx-auto p-6 my-10 border-2 border-[#0267af] bg-white dark:bg-gray-900 dark:border-[#339cd5] rounded-lg shadow-lg transition-colors duration-300">
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
              className="mt-6 w-full bg-[#0267af] cursor-pointer text-white font-semibold py-3 rounded hover:bg-[#0267afdc] dark:hover:bg-[#339cd5] transition"
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
