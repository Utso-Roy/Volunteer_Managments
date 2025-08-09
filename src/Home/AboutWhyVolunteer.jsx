import React from "react";
import { FaHandsHelping, FaUsers, FaSmile } from "react-icons/fa";

const AboutWhyVolunteer = () => {
  return (
    <section className="bg-white dark:bg-[#1d232a] py-16 px-6 max-w-7xl mx-auto rounded-lg shadow-md my-10">
      <h2 className="text-4xl font-bold text-center text-[#0267af] dark:text-blue-400 mb-8">
        Why Volunteer?
      </h2>

      <p className="max-w-3xl mx-auto text-center text-gray-700 dark:text-gray-300 mb-12 text-lg">
        Volunteering is a powerful way to make a positive impact on your community 
        and the world. It enriches your life with new skills, friendships, and the 
        joy of helping others. Here are some key benefits and reasons to get involved:
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-10 max-w-5xl mx-auto">
        {/* Item 1 */}
        <div className="flex flex-col items-center text-center p-6 bg-gray-100 dark:bg-[#274153] rounded-lg shadow-md hover:shadow-lg transition">
          <FaHandsHelping className="text-5xl text-[#0a72ba] mb-4" />
          <h3 className="text-2xl font-semibold mb-2 text-[#0267af] dark:text-blue-300">Make a Difference</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Your time and effort can directly improve lives and strengthen communities.
          </p>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center text-center p-6 bg-gray-100 dark:bg-[#274153] rounded-lg shadow-md hover:shadow-lg transition">
          <FaUsers className="text-5xl text-[#0a72ba] mb-4" />
          <h3 className="text-2xl font-semibold mb-2 text-[#0267af] dark:text-blue-300">Build Connections</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Meet like-minded people, build friendships, and expand your professional network.
          </p>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center text-center p-6 bg-gray-100 dark:bg-[#274153] rounded-lg shadow-md hover:shadow-lg transition">
          <FaSmile className="text-5xl text-[#0a72ba] mb-4" />
          <h3 className="text-2xl font-semibold mb-2 text-[#0267af] dark:text-blue-300">Feel Fulfilled</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Experience personal growth and satisfaction from helping others in need.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutWhyVolunteer;
