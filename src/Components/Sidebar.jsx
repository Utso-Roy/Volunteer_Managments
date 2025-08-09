import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";  
import {
  FaHome,
  FaUsers,
  FaClipboardList,
  FaBars,
  FaTimes,
  FaHandsHelping,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import Swal from "sweetalert2";
import { MdDashboard } from "react-icons/md";

const navItems = [
  { to: "/dashboard/add-volunteer", label: "Add Volunteer", icon: <FaUsers size={20} /> },
  { to: "/dashboard/volunteer_post", label: "Volunteer Post", icon: <FaHandsHelping size={20} /> },
  { to: "/dashboard/volunteer_request", label: "Volunteer Request", icon: <FaClipboardList size={20} /> },
  { to: "/settings", label: "Profile Setting", icon: <	FaUserCircle size={20} /> },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()


  const handleLogout = () => {
        navigate("/login");
            Swal.fire("Logged out!", "You have been logged out.", "success");
  }

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-[#0267af] text-white rounded-md focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Sidebar"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <aside
        className={`fixed top-0 left-0 h-full bg-[#0267af] dark:bg-gray-800 text-white flex flex-col p-6 space-y-6
          transition-all duration-300 ease-in-out
          ${isOpen ? "w-60" : "w-16"} 
          md:w-60 md:static md:flex`}
      >
        <h2
          className={`text-2xl font-bold mb-6 flex gap-1 items-center whitespace-nowrap overflow-hidden
          ${isOpen ? "opacity-100" : "opacity-0 md:opacity-100"} 
          transition-opacity duration-300`}
        >
        <MdDashboard />  Dashboard
        </h2>

        <nav className="flex flex-col space-y-4">
          {navItems.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-4 px-3 py-2 rounded transition-colors
                ${isActive ? "bg-[#014f86]" : "hover:bg-[#014f86]"}`
              }
              title={label}
              onClick={() => setIsOpen(false)} 
            >
              <div className="flex-shrink-0">{icon}</div>
              <span
                className={`whitespace-nowrap overflow-hidden transition-opacity duration-300
                  ${isOpen ? "opacity-100" : "opacity-0 md:opacity-100"}`}
              >
                {label}
              </span>
            </NavLink>
          ))}
<button onClick={handleLogout}
    
      className="flex items-center gap-2 px-5 py-2 
                 bg-white hover:bg-red-600 dark:bg-gray-800 dark:text-white hover:text-white cursor-pointer text-[#014f86] font-medium 
                 rounded-full shadow-md transition-all duration-300 
                 hover:shadow-lg hover:scale-105"
    >
      <FaSignOutAlt className="text-lg" />
      Logout
    </button>        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
