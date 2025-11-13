import React from "react";
import { FaHandshake, FaHeart, FaUsers, FaPeopleCarry, FaExternalLinkAlt } from "react-icons/fa";

const sponsors = [
  {
    id: 1,
    name: "Helping Hands",
    icon: <FaHandshake className="w-16 h-16" />,
    website: "https://helpinghands.org",
    description: "Supporting communities",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
  },
  {
    id: 2,
    name: "Care & Share",
    icon: <FaHeart className="w-16 h-16" />,
    website: "https://careandshare.org",
    description: "Spreading love and compassion",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-500/10",
  },
  {
    id: 3,
    name: "Community Boosters",
    icon: <FaUsers className="w-16 h-16" />,
    website: "https://communityboosters.org",
    description: "Building stronger communities",
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-500/10",
  },
  {
    id: 4,
    name: "Volunteer Alliance",
    icon: <FaPeopleCarry className="w-16 h-16" />,
    website: "https://volunteeralliance.org",
    description: "Empowering volunteers globally",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
  },
];

const Sponsors = () => {
  return (
    <section className="relative w-full px-6 md:px-8 py-16 rounded-2xl bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-[#0f1419] dark:via-[#1d232a] dark:to-[#0f1419]   overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#0267af]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-[#0267af]/10 to-[#0a72ba]/10 dark:from-[#0267af]/20 dark:to-[#0a72ba]/20 rounded-full text-[#0267af] dark:text-blue-400 font-semibold text-sm">
              🤝 Trusted Partners
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-[#0267af] to-[#0a72ba] bg-clip-text text-transparent">
              Our Partners & Sponsors
            </span>
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Collaborating with leading organizations to create meaningful impact
          </p>
          
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#0267af] to-[#0a72ba] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {sponsors.map(({ id, name, icon, website, description, color, bgColor }) => (
            <a
              key={id}
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
              aria-label={name}
            >
              <div className="relative bg-white dark:bg-[#242b35] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-3 p-8">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                  {/* Icon Container */}
                  <div className={`relative w-28 h-28 rounded-2xl ${bgColor} flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                    {/* Rotating Border */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    {/* Icon */}
                    <div className={`relative z-10 bg-gradient-to-r ${color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                      {icon}
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 group-hover:text-[#0267af] dark:group-hover:text-blue-300 transition-colors duration-300">
                    {name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {description}
                  </p>

                  {/* Visit Link */}
                  <div className="flex items-center gap-2 text-[#0267af] dark:text-blue-400 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Visit Website</span>
                    <FaExternalLinkAlt className="w-3 h-3" />
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#0267af]/5 via-[#0a72ba]/5 to-[#0267af]/5 dark:from-[#0267af]/10 dark:via-[#0a72ba]/10 dark:to-[#0267af]/10 rounded-2xl p-8 border border-[#0267af]/10">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-3">
              Interested in Partnering with Us?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Join our mission to make a positive impact. Let's create meaningful change together.
            </p>
            <button className="group relative px-8 py-4 bg-gradient-to-r from-[#0267af] to-[#0a72ba] text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <span className="relative z-10">Become a Partner</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;