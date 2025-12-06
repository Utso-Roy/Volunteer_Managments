import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar toggleSidebar={toggleSidebar} />

      <div className="flex lg:gap-8  md:6 sm:gap-4">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        <main className="flex-1 overflow-auto">
          <div >
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
