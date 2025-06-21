import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:border-2 dark:border-blue-300 dark:bg-[#1d232a] text-white pt-10 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h1 className="text-2xl font-bold text-[#0a72ba] mb-4">
            VolunteerHub
          </h1>
          <p className="text-gray-300 text-sm">
            VolunteerHub is dedicated to connecting volunteers with the causes
            they care about. Empowering change through every action.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-[#0a72ba]">
            Useful Links
          </h2>
          <ul className="space-y-2 text-sm">
            <Link to='/'>
            
              <li className="hover:text-indigo-400">
                Home
            </li>
            </Link>

            <Link to="volunteer-needs">
              <li className="hover:text-[#0a72ba]">All Volunteer Posts</li>
            </Link>
            <Link to="/login">
              {" "}
              <li className="hover:text-[#0a72ba]">Login</li>
            </Link>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-[#0a72ba]">
            Contact Us
          </h2>
          <ul className="text-sm space-y-2">
            <li>Email: info@volunteerhub.org</li>
            <li>Phone: +880 123 456 789</li>
            <li>Location: Dhaka, Bangladesh</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-[#0a72ba]">
            Follow Us
          </h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#0a72ba]">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[#0a72ba]">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-[#0a72ba]">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#0a72ba]">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 text-sm mt-10 border-t pt-4 border-gray-700">
        © {new Date().getFullYear()} VolunteerHub — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
