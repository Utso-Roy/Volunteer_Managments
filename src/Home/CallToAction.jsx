import React from "react";
import { useNavigate } from "react-router";
import { FaHandHoldingHeart, FaArrowRight, FaUsers } from "react-icons/fa";

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full rounded-3xl px-6 py-16 overflow-hidden">
      {/* Background with gradient */}
      <div className="relative bg-gradient-to-br from-[#0267af] via-[#0a72ba] to-[#0267af] py-16 px-6 md:px-12 rounded-3xl text-center overflow-hidden shadow-2xl">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-5">
          <div className="absolute top-10 left-10">
            <FaUsers className="text-white text-6xl" />
          </div>
          <div className="absolute bottom-10 right-10">
            <FaHandHoldingHeart className="text-white text-6xl" />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Icon Badge */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 animate-pulse">
            <FaHandHoldingHeart className="text-4xl text-white" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Become a Volunteer Today!
          </h2>

          {/* Subtitle */}
          <p className="text-white/90 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Join hands with us to make a difference in your community. Your time and effort can change lives and create lasting impact.
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-3xl font-bold text-white">1250+</p>
              <p className="text-white/80 text-sm">Volunteers</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-3xl font-bold text-white">85+</p>
              <p className="text-white/80 text-sm">Events</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <p className="text-3xl font-bold text-white">45+</p>
              <p className="text-white/80 text-sm">Communities</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => navigate("/dashboard/add-volunteer")}
              className="group relative px-8 py-4 bg-white text-[#0267af] font-bold rounded-full text-lg shadow-2xl hover:shadow-white/20 transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
            >
              <span className="relative z-10">Add Volunteer Need Post</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300"></div>
            </button>

            <button
              onClick={() => navigate("/need-volunteer")}
              className="group px-8 py-4 bg-transparent text-white font-bold rounded-full text-lg border-2 border-white hover:bg-white hover:text-[#0267af] transition-all duration-300 transform hover:scale-105"
            >
              Browse Opportunities
            </button>
          </div>

          {/* Bottom Text */}
          <p className="text-white/70 text-sm mt-8">
            🌟 Start making a difference in just a few clicks
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;