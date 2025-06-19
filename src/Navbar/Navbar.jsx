import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-indigo-600">
        VolunteerHub
      </Link>

      {/* Nav Items */}
      <div className="flex items-center space-x-6">
        <Link to="/" className="text-gray-700 hover:text-indigo-600">
          Home
        </Link>
        <Link to="/all-posts" className="text-gray-700 hover:text-indigo-600">
          All Volunteer Need Posts
        </Link>

        {/* Login Button */}
        <Link
          to="/login"
          className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
