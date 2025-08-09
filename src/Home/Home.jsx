import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router";
import Sliders from "./Slider/Sliders";
import AboutWhyVolunteer from "./AboutWhyVolunteer";
import SuccessStories from "./SuccessStories";
import CallToAction from "./CallToAction";
import StatisticsSection from "./StatisticsSection";
import FaqSection from "./FaqSection";
import Sponsors from "./Sponsors";

const Home = () => {
  const [volunteerPosts, setVolunteerPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/volunteerSingleData")
      .then((res) => res.json())
      .then((data) => setVolunteerPosts(data))
      .catch((err) => console.error("Error loading volunteer data:", err));
  }, []);

  const sectionSpacing = "max-w-6xl mx-auto px-6 md:px-8 py-6 my-8";

  return (
    <div className="bg-base-200">
      {/* Full width slider */}
      <div className="w-full">
        <Sliders />
      </div>

      {/* Volunteer Needs Now Section */}
      <div className={sectionSpacing}>
        <div className="flex items-center justify-center gap-3 ">
          <h2 className="font-bold mb-5 text-[2rem] text-[#0a72ba]">Volunteer Needs Now</h2>
        </div>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {volunteerPosts.map((post) => (
              <motion.div
                key={post._id}
                className="card bg-white dark:bg-[#1d232a] dark:border-2 dark:border-blue-300 shadow-md rounded-lg overflow-hidden"
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
                  <p className="text-sm dark:text-white text-gray-600">
                    Deadline: {new Date(post.deadline).toLocaleDateString()}
                  </p>
                  <Link to={`/volunteer-details/${post._id}`}>
                    <button className="mt-3 bg-[#0a72ba] cursor-pointer text-white px-4 py-2 rounded hover:bg-[#014f86] transition">
                      Details
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* About / Why Volunteer Section */}
      <motion.div
        className={`${sectionSpacing} dark:bg-[#1d232a] dark:border-2 dark:border-blue-300 rounded-lg text-center`}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <AboutWhyVolunteer />
      </motion.div>

      {/* Success Stories Section */}
      <motion.div
        className={`${sectionSpacing} dark:bg-[#1d232a] dark:border-2 dark:border-blue-300 rounded-lg text-center`}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <SuccessStories />
      </motion.div>

      
      <motion.div
  className={`${sectionSpacing} dark:bg-[#1d232a] dark:border-2 dark:border-blue-300 rounded-lg text-left`}
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
>
  <FaqSection />
</motion.div>
      {/* Call to Action Section */}
      <motion.div
        className={`${sectionSpacing} dark:bg-[#1d232a] dark:border-2 dark:border-blue-300 rounded-lg text-center`}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <CallToAction />
      </motion.div>

      {/* Statistics / Impact Section */}
      <motion.div
        className={`${sectionSpacing} dark:bg-[#1d232a] dark:border-2 dark:border-blue-300 rounded-lg text-center`}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <StatisticsSection />
      </motion.div>
      <motion.div
        className={`${sectionSpacing} dark:bg-[#1d232a] dark:border-2 dark:border-blue-300 rounded-lg text-center`}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Sponsors />
      </motion.div>
    </div>
  );
};

export default Home;
