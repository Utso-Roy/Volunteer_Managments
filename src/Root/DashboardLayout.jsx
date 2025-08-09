import React from "react";
import Sidebar from "../Components/Sidebar";
import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";

const DashboardLayout = () => {
  return (
      <div>
          <Navbar></Navbar>

          <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar />

      {/* Main content area */}
      <main className="flex-1 p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
      </div>
  );
};

export default DashboardLayout;
