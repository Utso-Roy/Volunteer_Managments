import React from "react";
import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

const Error = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold text-[#014f86] animate-bounce mb-4">404</h1>
        <p className="text-xl font-semibold text-gray-700 mb-2">
          Oops! Page not found.
        </p>
        <p className="text-gray-500 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2 bg-[#0267af] text-white rounded hover:bg-[#014f86] transition duration-300"
        >
          <FaArrowLeft /> Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
