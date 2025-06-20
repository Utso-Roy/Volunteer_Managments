import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router"; 
import volunteer from "../assets/volunteer.png";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOutUser, setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    

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
    <div className="navbar sticky top-0 z-[1000] my-2 bg-base-100 shadow-sm backdrop-blur-md">
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
        <div className="flex items-center">
          <img className="w-32 mr-2" src={volunteer} alt="volunteer" />
                  <div className="flex gap-2 items-center">
                      
                      <h2 className="font-bold text-[1.5rem] text-[#0267af]">Hub</h2>
                      <label className="swap swap-rotate">
  <input type="checkbox" className="theme-controller" value="synthwave" />

  <svg
    className="swap-off h-8 w-8 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  <svg
    className="swap-on h-8 w-8 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
</label>
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-2xs bg-gray-100 rounded-box w-52"
              >
                <li className="hover:bg-[#0267af] hover:text-white font-semibold">
                  <Link to="/add-volunteer">Add Volunteer Need Post</Link>
                </li>
                <li className="hover:bg-[#0267af] hover:text-white font-semibold">
                  <Link to="/manage-posts">Manage My Posts</Link>
                </li>
              </ul>
            </div>

            <button
              onClick={handleLogOut}
              className="bg-[#0a72ba] hover:bg-red-600 text-white px-4 py-2 rounded-md transition duration-200"
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
