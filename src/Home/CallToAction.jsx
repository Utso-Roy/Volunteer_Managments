import React from "react";
import { useNavigate } from "react-router";

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-6xl mx-auto rounded-lg shadow-lg px-6 py-16 bg-white dark:bg-gray-800">
      <div className="bg-gray-100 dark:bg-gray-700 py-12 px-6 rounded-lg text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0267af] dark:text-blue-400 mb-4 drop-shadow-lg">
          Become a Volunteer Today!
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg mb-8 max-w-xl mx-auto drop-shadow-md">
          Join hands with us to make a difference in your community. Your time and effort can change lives.
        </p>
        <button
          onClick={() => navigate("/dashboard/add-volunteer")}
          className="bg-white cursor-pointer dark:bg-gray-800 text-[#0267af] dark:text-blue-600 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-lg sm:text-xl shadow-lg  dark:hover:bg-gray-200 transition"
        >
          Add a Volunteer Need Post
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
