import React, { useContext } from "react";
import { Link, useNavigate } from "react-router"; 
import volunteer from "../assets/volunteer.png";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOutUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

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
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/volunteer-needs">All Volunteer Need Posts</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <img className="w-32 mr-2" src={volunteer} alt="volunteer" />
          <h2 className="font-bold text-[1.5rem] text-[#0267af]">Hub</h2>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/volunteer-needs">All Volunteer Need Posts</Link>
          </li>
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
