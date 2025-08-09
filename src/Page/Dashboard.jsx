import React from "react";
import {
  FaTachometerAlt,
  FaHandsHelping,
  FaUser,
  FaSignOutAlt,
  FaPlusCircle,
  FaClipboardList,
  FaArrowCircleLeft,
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Welcome Banner */}
      <div className="bg-[#0267af]  dark:bg-gray-800 rounded-xl shadow-lg p-6 text-white flex flex-col sm:flex-row items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Welcome to Your Dashboard</h1>
          <p className="mt-2 text-white/80">
            Here you can manage volunteers, create posts, and update your
            profile — all in one place.
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <button className="bg-white dark:bg-gray-800 dark:text-[#0267af]  flex gap-1 items-center text-[#014f86] px-5 py-2 rounded-full font-medium shadow  transition">
         <FaArrowCircleLeft color="#014f86"/>   Get Started
          </button>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {/* Volunteer Posts */}
        <div className="bg-white dark:bg-gray-800  p-5 rounded-lg shadow hover:shadow-lg cursor-pointer transition-all">
          <div className="flex items-center gap-3">
            <FaHandsHelping className="text-2xl text-green-500" />
            <h3 className="font-semibold text-gray-800 dark:text-white">
              Volunteer Posts
            </h3>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            View and manage all your volunteer opportunities.
          </p>
        </div>

        {/* Add Volunteer */}
        <div className="bg-white dark:bg-gray-800  p-5 rounded-lg shadow hover:shadow-lg cursor-pointer transition-all">
          <div className="flex items-center gap-3">
            <FaPlusCircle className="text-2xl text-purple-500" />
            <h3 className="font-semibold text-gray-800 dark:text-white">
              Add Volunteer
            </h3>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Add new volunteers to your organization.
          </p>
        </div>

        {/* Post Volunteer */}
        <div className="bg-white dark:bg-gray-800  p-5 rounded-lg shadow hover:shadow-lg cursor-pointer transition-all">
          <div className="flex items-center gap-3">
            <FaClipboardList className="text-2xl text-yellow-500" />
            <h3 className="font-semibold text-gray-800 dark:text-white">
              Post Volunteer
            </h3>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Create and publish new volunteer requests.
          </p>
        </div>

        {/* Profile */}
        <div className="bg-white dark:bg-gray-800  p-5 rounded-lg shadow hover:shadow-lg cursor-pointer transition-all">
          <div className="flex items-center gap-3">
            <FaUser className="text-2xl text-blue-500" />
            <h3 className="font-semibold text-gray-800 dark:text-white">
              My Profile
            </h3>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Edit and update your personal details.
          </p>
        </div>

        {/* Logout */}
        <div className="bg-white dark:bg-gray-800  p-5 rounded-lg shadow hover:shadow-lg cursor-pointer transition-all">
          <div className="flex items-center gap-3">
            <FaSignOutAlt className="text-2xl text-red-500" />
            <h3 className="font-semibold text-gray-800 dark:text-white">
              Logout
            </h3>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Sign out of your account securely.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
