import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import Container from "../Container/Container";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className=" bg-gray-100 dark:bg-gray-900">
      <Navbar toggleSidebar={toggleSidebar} />

      <Container>


        <div className="flex lg:gap-8 max-w-7xl mx-auto  md:gap-6 sm:gap-4">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        <main className="flex-1 overflow-auto">
          <div >
            <Outlet />
          </div>
        </main>
      </div>
      </Container>



    </div>
  );
};

export default DashboardLayout;
