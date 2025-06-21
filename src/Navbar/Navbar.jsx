import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router"; 
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { FaArrowDown } from "react-icons/fa";

const Navbar = () => {
  const { user, logOutUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const links = (
    <>
      <li>
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? "text-[#0267af] font-bold" : ""}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/volunteer-needs" 
          className={({ isActive }) => isActive ? "text-[#0267af] font-bold" : ""}
        >
          All Volunteer Need Posts
        </NavLink>
      </li>
    </>
  );

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0a72ba",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOutUser()
          .then(() => {
            setUser(null);
            navigate("/login");
            Swal.fire("Logged out!", "You have been logged out.", "success");
          })
          .catch((error) => {
            alert(error.message);
          });
      }
    });
  };

  return (
    <div className="navbar sticky top-0 z-[1000] my-2 bg-base-100 dark:border-2 dark:border-blue-300 shadow-sm backdrop-blur-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
              <div className="flex gap-1 items-center">
                  <h2 className="font-bold text-[#0267af]  md:text-[1.5rem]">VolunteerHub</h2>
          <div className="flex gap-2 items-center">
<img className=" w-5 h-5 md:w-8 sm:w-5 sm:h-5 md:h-8" src="https://i.ibb.co/DgQ4vJb5/volunteer-1.png" alt="volunteer" />
            <button 
              onClick={toggleTheme} 
              className=" cursor-pointer  ml-2"
              aria-label="Toggle Theme"
              title="Toggle light/dark theme"
            >
              {theme === "light" ? (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.485-9h1M3 12H2m15.364 6.364l.707.707M6.343 6.343l.707.707m12.728 0l-.707.707M6.343 17.657l-.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              ) : (
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-4">
            <div className="dropdown dropdown-end group relative">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full relative">
                                  <img src={user?.photoURL} alt="User" />
                                  
                              </div>
                             
              </div>
                           

              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 whitespace-nowrap">
                {user?.displayName || "No Name"}
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] dark:bg-[#1d232a] dark:border-2 dark:border-blue-300 p-2 shadow-2xs bg-gray-100 rounded-box w-52"
              >
                <li className="hover:bg-[#0267af] hover:text-white font-semibold">
                  <Link to="/add-volunteer">Add Volunteer Need Post</Link>
                </li>
                <li className="hover:bg-[#0267af] hover:text-white font-semibold">
                  <Link to="/manage_post/:id">Manage My Posts</Link>
                </li>
              </ul>
            </div>

            <button
              onClick={handleLogOut}
              className="bg-[#0a72ba] cursor-pointer hover:bg-red-600 text-white px-4 py-2 rounded-md transition duration-200"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="btn bg-[#0a72ba] font-semibold text-white"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
