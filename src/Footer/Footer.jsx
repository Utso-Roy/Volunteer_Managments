import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <h1 className="text-2xl font-bold text-[#0a72ba] mb-4">VolunteerHub</h1>
          <p className="text-gray-300 text-sm">
            VolunteerHub is dedicated to connecting volunteers with the causes they care about. Empowering change through every action.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-[#0a72ba]">Useful Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-indigo-400">Home</a></li>
            <li><a href="/all-posts" className="hover:text-[#0a72ba]">All Volunteer Posts</a></li>
            <li><a href="/login" className="hover:text-[#0a72ba]">Login</a></li>
            <li><a href="/add-post" className="hover:text-[#0a72ba]">Add a Post</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-[#0a72ba]">Contact Us</h2>
          <ul className="text-sm space-y-2">
            <li>Email: info@volunteerhub.org</li>
            <li>Phone: +880 123 456 789</li>
            <li>Location: Rampur, Dinajpur, Bangladesh</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-[#0a72ba]">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#0a72ba]"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#0a72ba]"><FaTwitter /></a>
            <a href="#" className="hover:text-[#0a72ba]"><FaInstagram /></a>
            <a href="#" className="hover:text-[#0a72ba]"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-gray-400 text-sm mt-10 border-t pt-4 border-gray-700">
        © {new Date().getFullYear()} VolunteerHub — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
