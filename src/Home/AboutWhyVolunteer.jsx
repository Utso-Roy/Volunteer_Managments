import React from "react";
import { FaHandsHelping, FaUsers, FaSmile, FaLightbulb } from "react-icons/fa";

const AboutWhyVolunteer = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-[#1d232a] dark:to-[#0f1419] py-20 px-6 w-full rounded-2xl  mt-10 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0267af]/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-5xl font-extrabold bg-gradient-to-r from-[#0267af] to-[#0a72ba] bg-clip-text text-transparent mb-4">
            Why Volunteer?
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#0267af] to-[#0a72ba] mx-auto rounded-full"></div>
        </div>

        <p className="max-w-3xl mx-auto text-center text-gray-600 dark:text-gray-300 mb-16 text-lg leading-relaxed">
          Volunteering is a powerful way to make a positive impact on your community 
          and the world. It enriches your life with new skills, friendships, and the 
          joy of helping others. Here are some key benefits and reasons to get involved:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {/* Item 1 */}
          <div className="group relative bg-white dark:bg-[#242b35] p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0267af]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#0267af] to-[#0a72ba] rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto">
                <FaHandsHelping className="text-3xl md:text-4xl text-white" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#0267af] dark:text-blue-300 text-center">
                Make a Difference
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-center text-sm md:text-base">
                Your time and effort can directly improve lives and strengthen communities.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="group relative bg-white dark:bg-[#242b35] p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0267af]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#0267af] to-[#0a72ba] rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto">
                <FaUsers className="text-3xl md:text-4xl text-white" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#0267af] dark:text-blue-300 text-center">
                Build Connections
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-center text-sm md:text-base">
                Meet like-minded people, build friendships, and expand your professional network.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="group relative bg-white dark:bg-[#242b35] p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0267af]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#0267af] to-[#0a72ba] rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto">
                <FaSmile className="text-3xl md:text-4xl text-white" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#0267af] dark:text-blue-300 text-center">
                Feel Fulfilled
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-center text-sm md:text-base">
                Experience personal growth and satisfaction from helping others in need.
              </p>
            </div>
          </div>

          {/* Item 4 - NEW */}
          <div className="group relative bg-white dark:bg-[#242b35] p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0267af]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#0267af] to-[#0a72ba] rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto">
                <FaLightbulb className="text-3xl md:text-4xl text-white" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-[#0267af] dark:text-blue-300 text-center">
                Learn & Grow
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-center text-sm md:text-base">
                Develop new skills, gain valuable experience, and discover hidden talents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWhyVolunteer;