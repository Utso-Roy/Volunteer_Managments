import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";  
import {
  FaUsers,
  FaClipboardList,
  FaHandsHelping,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

const navItems = [
  { to: "/dashboard/add-volunteer", label: "Add Volunteer", icon: <FaUsers size={20} /> },
  { to: "/dashboard/volunteer_post", label: "Volunteer Post", icon: <FaHandsHelping size={20} /> },
  { to: "/dashboard/volunteer_request", label: "Volunteer Request", icon: <FaClipboardList size={20} /> },
  { to: "/dashboard/profile", label: "Profile Setting", icon: <FaUserCircle size={20} /> },
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
    alert("Logged out! You have been logged out.");
  };

  return (
    <>
      {/* Overlay for mobile only */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static top-16 left-0 bottom-0 z-40
          bg-[#0267af] dark:bg-gray-800 text-white 
          flex flex-col p-6 space-y-6
          transition-all duration-300 ease-in-out
          overflow-y-auto
          
          ${isOpen ? 'translate-x-0 w-64' : '-translate-x-full w-0'}
          md:translate-x-0 md:w-20 lg:w-64
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-center lg:justify-start gap-2">
          <MdDashboard className="text-2xl flex-shrink-0" />
          <h2 className="text-2xl font-bold hidden lg:block whitespace-nowrap">
            Dashboard
          </h2>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col space-y-3 flex-1">
          {navItems.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center justify-center lg:justify-start gap-4 px-4 py-3 rounded-lg transition-all duration-200 group
                ${isActive 
                  ? "bg-[#014f86] shadow-lg" 
                  : "hover:bg-[#014f86]"
                }`
              }
              title={label} 
              onClick={() => {
                if (window.innerWidth < 768) {
                  toggleSidebar();
                }
              }}
            >
              <div className="flex-shrink-0">{icon}</div>
              <span className="font-medium hidden lg:block whitespace-nowrap">
                {label}
              </span>
              
              {/* Tooltip for md screens */}
              <span className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 lg:hidden transition-opacity whitespace-nowrap pointer-events-none">
                {label}
              </span>
            </NavLink>
          ))}

          {/* Logout Button */}
          <button 
            onClick={handleLogout}
            className="flex items-center justify-center lg:justify-start gap-4 px-4 py-3 mt-auto
                       bg-white hover:bg-red-600 
                       text-[#0267af] hover:text-white 
                       font-medium rounded-lg shadow-md 
                       transition-all duration-300 
                       hover:shadow-lg hover:scale-105 group relative"
            title="Logout"
          >
            <FaSignOutAlt className="text-lg flex-shrink-0" />
            <span className="hidden lg:block">Logout</span>
            
            {/* Tooltip for md screens */}
            <span className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 lg:hidden transition-opacity whitespace-nowrap pointer-events-none">
              Logout
            </span>
          </button>
        </nav>
      </aside>
    </>
  );
};

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className=" bg-gray-100 dark:bg-gray-900">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 h-16 px-4 flex items-center shadow-md">
        <button
          onClick={toggleSidebar}
          className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle Sidebar"
        >
          <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        <h1 className="ml-4 text-xl font-bold text-gray-800 dark:text-white">
          Volunteer Management
        </h1>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Main content area */}
    
      </div>
    </div>
  );
};

export default DashboardLayout;