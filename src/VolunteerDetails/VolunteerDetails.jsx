import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Swal from 'sweetalert2';
import BeAVolunteers from '../BeAVolunteers/BeAVolunteers';  

const VolunteerDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/volunteerData`)
      .then((res) => res.json())
      .then((data) => {
        const found = data.find(item => item._id === id); 
        setPost(found);
      });
  }, [id]);

  const handleVolunteerClick = () => {
    if (!post) return;
    setShowModal(true);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 my-10 border-2 border-[#0267af] bg-white rounded-lg shadow-lg">
      {!post ? (
        <span className="loading block mx-auto loading-bars loading-xl"></span>
      ) : (
        <>
          <img src={post.thumbnail} alt={post.title} className="w-full h-64 object-cover rounded" />

          <h2 className="text-3xl font-bold mt-6">{post.title}</h2>
          <p className="mt-2"><strong>Category:</strong> {post.category}</p>
          <p><strong>Deadline:</strong> {new Date(post.deadline).toLocaleString()}</p>

          <button
            onClick={handleVolunteerClick}
            className="mt-6 w-full btn text-white bg-[#0267af]"
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
