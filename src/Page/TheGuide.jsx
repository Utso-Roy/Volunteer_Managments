import React from "react";
import { FaBookOpen, FaHandsHelping, FaUsers, FaChalkboardTeacher, FaGlobeAmericas } from "react-icons/fa";
import { Link } from "react-router";

const TheGuide = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Guide Heading */}
        <h2 className="text-4xl font-bold text-[#0a72ba] dark:text-blue-400 mb-4">
          Your Volunteer Guide
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          Follow these steps to start your volunteering journey, 
          connect with impactful causes, and make a lasting difference in people’s lives.
        </p>

        {/* Step-by-step guide */}
        <div className="grid gap-8 md:grid-cols-3 ">
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105">
            <span className="text-sm font-bold text-[#0a72ba] dark:text-blue-400">Step 1</span>
            <FaBookOpen className="text-[#0a72ba] dark:text-blue-400 text-5xl mx-auto my-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Learn the Basics
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Understand the responsibilities, ethics, and impact of being a volunteer before you begin.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105">
            <span className="text-sm font-bold text-[#0a72ba] dark:text-blue-400">Step 2</span>
            <FaHandsHelping className="text-[#0a72ba] dark:text-blue-400 text-5xl mx-auto my-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Find Opportunities
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Search for causes and organizations that align with your passion and skills.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105">
            <span className="text-sm font-bold text-[#0a72ba] dark:text-blue-400">Step 3</span>
            <FaUsers className="text-[#0a72ba] dark:text-blue-400 text-5xl mx-auto my-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Join & Contribute
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Become part of a community, participate in events, and track your volunteer hours.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105">
            <span className="text-sm font-bold text-[#0a72ba] dark:text-blue-400">Step 4</span>
            <FaChalkboardTeacher className="text-[#0a72ba] dark:text-blue-400 text-5xl mx-auto my-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Build Your Skills
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Take training programs and workshops to improve your volunteering effectiveness.
            </p>
          </div>

          {/* Step 5 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105">
            <span className="text-sm font-bold text-[#0a72ba] dark:text-blue-400">Step 5</span>
            <FaGlobeAmericas className="text-[#0a72ba] dark:text-blue-400 text-5xl mx-auto my-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Make an Ongoing Impact
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Continue volunteering regularly and inspire others to join your cause.
            </p>
          </div>
        </div>

     
      </div>
    </section>
  );
};

export default TheGuide;
