import React, { useEffect, useState } from "react";
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
import Container from "../Container/Container";

const Home = () => {
  const [volunteerPosts, setVolunteerPosts] = useState([]);

  useEffect(() => {
    fetch("https://volunteer-server-six.vercel.app/volunteerSingleData")
      .then((res) => res.json())
      .then((data) => setVolunteerPosts(data))
      .catch((err) => console.error("Error loading volunteer data:", err));
  }, []);

  const sectionSpacing = " w-full px-6 mt-8 ";

  return (
    <div className=" dark:bg-gray-800  ">
      {/* Full width slider */}
      <div >
        <Sliders />
      </div>

      <div className={sectionSpacing}>
        <div className="flex items-center justify-center gap-3 ">
          <h2 className="font-bold mb-5 text-[3rem] text-[#0a72ba]">
            Volunteer Needs Now
          </h2>
        </div>

        <Container>
          <div className="max-w-7xl mx-auto">
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {volunteerPosts.map((post) => (
              <div
                key={post._id}
                className="card bg-white dark:bg-[#1d232a]  shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-xl font-semibold text-[#0a72ba]">
                    {post.title}
                  </h3>
                  <p className="text-sm">Category: {post.category}</p>
                  <p className="text-sm dark:text-white text-gray-600">
                    Deadline: {new Date(post.deadline).toLocaleDateString()}
                  </p>
                  <Link to={`/volunteer-details/${post._id}`}>
                    <button className="w-full btn btn-outline text-[#0267af] hover:bg-[#0267af] hover:text-white">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
         </div>
        </Container>
      </div>

      <div
            >
        <AboutWhyVolunteer />
      </div>

      {/* Success Stories Section */}
      <div
      
      >
        <SuccessStories />
      </div>

      <div
           >
        <FaqSection />
      </div>

      {/* Call to Action Section */}
      <div
      
      >
        <CallToAction />
      </div>

      {/* Statistics / Impact Section */}
      <div
      
      >
        <StatisticsSection />
      </div>

      <div
      
      >
        <Sponsors />
      </div>
    </div>
  );
};

export default Home;
