import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[#0267af] dark:text-blue-400 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have questions or need assistance? We’d love to hear from you!  
            Fill out the form or reach us through the following details.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-6">
            {[
              {
                icon: <FaEnvelope className="text-3xl text-[#0267af] dark:text-blue-400" />,
                text: "contact@example.com",
              },
              {
                icon: <FaPhoneAlt className="text-3xl text-[#0267af] dark:text-blue-400" />,
                text: "+123 456 7890",
              },
              {
                icon: <FaMapMarkerAlt className="text-3xl text-[#0267af] dark:text-blue-400" />,
                text: "123 Main Street, City, Country",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              >
                {item.icon}
                <span className="text-gray-700 dark:text-gray-300">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <form className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg space-y-4 border border-gray-100 dark:border-gray-700">
            <input
              type="text"
              placeholder="Your Name"
              aria-label="Your Name"
              className="input input-bordered w-full dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0267af]"
            />
            <input
              type="email"
              placeholder="Your Email"
              aria-label="Your Email"
              className="input input-bordered w-full dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0267af]"
            />
            <textarea
              placeholder="Your Message"
              aria-label="Your Message"
              rows="4"
              className="textarea textarea-bordered w-full dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0267af]"
            ></textarea>
            <button
              type="submit"
              className="w-full btn btn-outline text-[#0267af] hover:bg-[#0267af] hover:text-white"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
