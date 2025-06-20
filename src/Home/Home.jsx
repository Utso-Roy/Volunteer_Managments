import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router";

const Home = () => {
    const [volunteerPosts, setVolunteerPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/volunteerSingleData")
      .then((res) => res.json())
      .then((data) => setVolunteerPosts(data))
      .catch((err) => console.error("Error loading volunteer data:", err));
  }, []);
    
    

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="space-y-12">

      <div className="w-full mx-auto my-6 rounded-xl overflow-hidden shadow-xl">
        <Slider {...settings}>
          <div className="bg-[#0a72ba] text-center text-white flex flex-col justify-center py-20 items-center min-h-[250px] p-8">
            <h2 className="text-4xl font-bold">Join Hands to Make a Difference</h2>
            <p className="mt-4 text-lg">Become a volunteer and serve your community today.</p>
          </div>
          <div className="bg-[#38b6ff] text-center text-white flex flex-col justify-center py-20 items-center min-h-[250px] p-8">
            <h2 className="text-4xl font-bold">Urgent Volunteer Needed</h2>
            <p className="mt-4 text-lg">We need helping hands for our upcoming event.</p>
          </div>
          <div className="bg-[#2a9d8f] text-center text-white flex flex-col justify-center py-20 items-center min-h-[250px] p-8">
            <h2 className="text-4xl font-bold">Every Small Help Counts</h2>
            <p className="mt-4 text-lg">Donate your time and skills to help the needy.</p>
          </div>
        </Slider>
      </div>

      <div className="px-4 md:px-8">
        <h2 className="font-bold text-[2rem] text-center text-[#0a72ba] mb-6">Volunteer Needs Now</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {volunteerPosts.map((post) => (
            <motion.div
              key={post._id}
              className="card bg-white shadow-md rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={post.thumbnail}
                alt={post.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#0a72ba]">{post.title}</h3>
                <p className="text-sm">Category: {post.category}</p>
                <p className="text-sm text-gray-600">
                  Deadline: {new Date(post.deadline).toLocaleDateString()}
                </p>
                <Link to={`/volunteer-details/${post._id}`}>
                  <button className="mt-3 bg-[#0a72ba] cursor-pointer text-white px-4 py-2 rounded transition">
                    View Details
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-6">
          <Link to="/volunteer-posts">
            <Link to="/volunteer-needs" className="bg-[#0a72ba] text-white px-6 py-2 rounded hover:bg-blue-800 transition">
              See All
            </Link>
          </Link>
        </div>
      </div>

      <motion.div
        className="bg-[#f0f8ff] p-8 rounded-lg text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-[#0a72ba] mb-4">Why Volunteer With Us?</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Volunteering with us means making real impact. Whether you're planting trees, teaching kids, or helping in disasters — your time matters.
        </p>
      </motion.div>

      <motion.div
        className="bg-[#e0f7fa] p-8 my-7 rounded-lg text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-[#0a72ba] mb-4">Success Stories</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          From rebuilding communities to changing lives — read real stories from our amazing volunteers who made a difference.
        </p>
      </motion.div>
    </div>
  );
};

export default Home;
