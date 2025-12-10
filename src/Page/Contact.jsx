import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-extrabold text-[#0267af] mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Have questions or need assistance? We'd love to hear from you! Fill
            out the form or reach us through the following details.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-blue-100 hover:shadow-blue-200 transition-all duration-300">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-[#0267af] rounded-full flex items-center justify-center">
                <FaEnvelope className="text-white text-xl" />
              </div>
              <h2 className="text-3xl font-bold text-[#0267af]">
                Contact Info
              </h2>
            </div>
            <div className="space-y-8">
              {[
                {
                  icon: <FaEnvelope className="text-[#0267af] text-3xl" />,
                  label: "Email",
                  text: "contact@example.com",
                  bg: "blue-100 "
                },
                {
                  icon: <FaPhoneAlt className="text-[#0267af] text-3xl" />,
                  label: "Phone",
                  text: "+123 456 7890",
                  bg: "blue-100"
                },
                {
                  icon: <FaMapMarkerAlt className="text-[#0267af] text-3xl" />,
                  label: "Address",
                  text: "123 Main Street, City, Country",
                  bg: "blue-100"
                },
              ].map((item, idx) => (
                <div key={idx} className={`flex items-start gap-4 p-5 bg-${item.bg} rounded-2xl hover:scale-105 transition-transform duration-300`}>
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-1">{item.label}</p>
                    <span className="text-gray-800 font-medium text-lg">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-blue-100 hover:shadow-blue-200 transition-all duration-300">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-[#0267af] rounded-full flex items-center justify-center">
                <FaPaperPlane className="text-white text-xl" />
              </div>
              <h2 className="text-3xl font-bold text-[#0267af]">
                Send Message
              </h2>
            </div>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12">
                <FaCheckCircle className="text-green-500 text-8xl mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                <p className="text-gray-600">We'll get back to you soon.</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-[#0267af] transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-[#0267af] transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-[#0267af] transition-all duration-300"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-5 py-3 border-2 border-blue-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-[#0267af] transition-all duration-300 resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-[#0267af] text-white py-4 px-6 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-[#015a9c] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaPaperPlane className="text-xl" />
                  Send Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;