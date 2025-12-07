import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";  
import {
  FaUsers,
  FaClipboardList,
  FaHandsHelping,
  FaUserCircle,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

const navItems = [
  { to: "/dashboard/add-volunteer", label: "Add Volunteer", icon: <FaUsers size={20} /> },
  { to: "/dashboard/volunteer_post", label: "Volunteer Post", icon: <FaHandsHelping size={20} /> },
  { to: "/dashboard/volunteer_request", label: "Volunteer Request", icon: <FaClipboardList size={20} /> },
  { to: "/dashboard/profile", label: "Profile Setting", icon: <FaUserCircle size={20} /> },
];

const Sidebar = ({ isOpen, toggleSidebar, userCredentials }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
    alert("Logged out! You have been logged out.");
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static top-0 left-0 bottom-0 z-40
          bg-gradient-to-b from-[#0267af] to-[#014f86] dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900
          text-white 
          flex flex-col
          transition-all duration-300 ease-in-out
          overflow-y-auto
          shadow-2xl
          
          ${isOpen ? 'translate-x-0 w-72' : '-translate-x-full w-0'}
          md:translate-x-0 md:w-20 lg:w-72
        `}
      >
        {/* Close button for mobile */}
        <button
          onClick={toggleSidebar}
          className="md:hidden absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Close Sidebar"
        >
          <FaTimes size={24} />
        </button>

        {/* User Profile Section */}
        <div className="p-6 border-b border-white/20">
          <div className="flex items-center gap-4 lg:flex-row flex-col lg:items-start items-center">
            <div className="w-16 h-16 lg:w-14 lg:h-14 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 border-2 border-white/30">
              <FaUserCircle size={40} className="text-white/90" />
            </div>
            <div className="flex-1 hidden lg:block">
              <h3 className="font-bold text-lg truncate">{userCredentials.name}</h3>
              <p className="text-sm text-white/80 truncate">{userCredentials.email}</p>
              <span className="inline-block mt-1 px-2 py-0.5 bg-white/20 rounded-full text-xs font-medium">
                {userCredentials.role}
              </span>
            </div>
          </div>
          
          {/* Mobile view - centered credentials */}
          <div className="lg:hidden mt-3 text-center">
            <h3 className="font-bold text-lg">{userCredentials.name}</h3>
            <p className="text-sm text-white/80">{userCredentials.email}</p>
            <span className="inline-block mt-2 px-3 py-1 bg-white/20 rounded-full text-xs font-medium">
              {userCredentials.role}
            </span>
          </div>
        </div>

        {/* Dashboard Header */}
        <div className="flex items-center justify-center lg:justify-start gap-3 px-6 py-4">
          <MdDashboard className="text-2xl flex-shrink-0" />
          <h2 className="text-xl font-bold hidden lg:block whitespace-nowrap">
            Dashboard
          </h2>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col space-y-2 flex-1 px-4 pb-4">
          {navItems.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center justify-center lg:justify-start gap-4 px-4 py-3 rounded-lg transition-all duration-200 group relative
                ${isActive 
                  ? "bg-white/20 shadow-lg scale-105" 
                  : "hover:bg-white/10 hover:scale-105"
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
              <span className="absolute left-full ml-4 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 lg:hidden transition-opacity whitespace-nowrap pointer-events-none shadow-xl z-50">
                {label}
              </span>
            </NavLink>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-white/20">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-center lg:justify-start gap-4 px-4 py-3
                       bg-white hover:bg-red-500 
                       text-[#0267af] hover:text-white 
                       font-bold rounded-lg shadow-lg 
                       transition-all duration-300 
                       hover:shadow-xl hover:scale-105 group relative"
            title="Logout"
          >
            <FaSignOutAlt className="text-lg flex-shrink-0" />
            <span className="hidden lg:block">Logout</span>
            
            {/* Tooltip for md screens */}
            <span className="absolute left-full ml-4 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 lg:hidden transition-opacity whitespace-nowrap pointer-events-none shadow-xl z-50">
              Logout
            </span>
          </button>
        </div>
      </aside>
    </>
  );
};

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const userCredentials = {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Administrator"
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-20 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 h-16 px-4 flex items-center shadow-md">
        <button
          onClick={toggleSidebar}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle Sidebar"
        >
          <FaBars className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        </button>
        
        <h1 className="ml-4 text-xl font-bold text-gray-800 dark:text-white">
          Volunteer Management
        </h1>

        {/* User info in navbar for md screens when sidebar is collapsed */}
        <div className="ml-auto hidden md:flex lg:hidden items-center gap-2">
          <FaUserCircle size={32} className="text-gray-600 dark:text-gray-400" />
          <div className="text-sm">
            <p className="font-semibold text-gray-800 dark:text-white">{userCredentials.name}</p>
            <p className="text-gray-500 dark:text-gray-400 text-xs">{userCredentials.role}</p>
          </div>
        </div>
      </nav>

      <div className="flex ">
        {/* Sidebar */}
        <Sidebar 
          isOpen={isSidebarOpen} 
          toggleSidebar={toggleSidebar}
          userCredentials={userCredentials}
        />

       
      </div>
    </div>
  );
};

export default DashboardLayout;