import React from "react";
import { FaUsers, FaRegCalendarCheck, FaClock, FaHandsHelping } from "react-icons/fa";
import CountUp from "react-countup";
import { Link } from "react-router";

const statsData = [
  {
    id: 1,
    title: "Volunteers Joined",
    value: 1250,
    icon: <FaUsers className="w-12 h-12" />,
    color: "from-[#0267af] to-[#0a72ba]",
    bgColor: "bg-blue-500/10",
  },
  {
    id: 2,
    title: "Successful Events",
    value: 85,
    icon: <FaRegCalendarCheck className="w-12 h-12" />,
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-500/10",
  },
  {
    id: 3,
    title: "Volunteer Hours",
    value: 4320,
    icon: <FaClock className="w-12 h-12" />,
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-500/10",
  },
  {
    id: 4,
    title: "Communities Served",
    value: 45,
    icon: <FaHandsHelping className="w-12 h-12" />,
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-500/10",
  },
];

const StatisticsSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-[#0f1419] dark:via-[#1d232a] dark:to-[#0f1419] px-6 py-20 overflow-hidden rounded-2xl ">
      {/* Background Decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0267af]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-[#0267af]/10 to-[#0a72ba]/10 dark:from-[#0267af]/20 dark:to-[#0a72ba]/20 rounded-full text-[#0267af] dark:text-blue-400 font-semibold text-sm">
              📊 Statistics & Impact
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-[#0267af] to-[#0a72ba] bg-clip-text text-transparent">
              Our Impact in Numbers
            </span>
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Real data showcasing the incredible difference our volunteers make every day
          </p>
          
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#0267af] to-[#0a72ba] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {statsData.map(({ id, title, value, icon, color, bgColor }) => (
            <div
              key={id}
              className="group relative bg-white dark:bg-[#242b35] cursor-pointer rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-3"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col items-center space-y-6">
                {/* Icon Container */}
                <div className={`relative w-24 h-24 rounded-2xl ${bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  {/* Rotating Border Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow`}></div>
                  
                  {/* Icon */}
                  <div className={`relative z-10 bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                    {icon}
                  </div>
                </div>

                {/* Number */}
                <div className="text-center">
                  <p className={`text-5xl md:text-6xl font-extrabold bg-gradient-to-r ${color} bg-clip-text text-transparent mb-2`}>
                    <CountUp end={value} duration={3} separator="," />
                    {id === 4 && <span>+</span>}
                  </p>
                  
                  {/* Title */}
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                    {title}
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-1.5 bg-gray-200 dark:bg-[#1d232a] rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out group-hover:w-full`}
                    style={{ width: '0%' }}
                  ></div>
                </div>
              </div>

              {/* Bottom Accent */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
            Join us in making a difference. Every volunteer counts! 🌟
          </p>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-[#0267af] to-[#0a72ba] text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <Link to='/'>
             <span className="relative z-10">Become a Volunteer</span>
            
            </Link>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        /* Animate progress bars on mount */
        @keyframes fillBar {
          to {
            width: 100% !important;
          }
        }
        .group:hover .h-1\\.5 > div {
          animation: fillBar 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default StatisticsSection;