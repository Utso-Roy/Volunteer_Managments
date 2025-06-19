import React from "react";
import { Link } from "react-router";
import volunteer from '../assets/volunteer.png'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><Link to="/">Home</Link></li>
            <li><Link to="/all-posts">All Volunteer Need Posts</Link></li>
          </ul>
        </div>
<img className="w-30" src={volunteer} alt="volunteer" /> <h2 className="font-bold text-[1.5rem] text-[#058ced] "> Hub</h2>    </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/all-posts">All Volunteer Need Posts</Link></li>
        </ul>
      </div>

      <div className="navbar-end">
        <Link to="/login" className="btn bg-[#0a72ba] font-semibold text-white">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
