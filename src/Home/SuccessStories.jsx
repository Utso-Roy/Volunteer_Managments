import React, { useState } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Rahim Uddin",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    role: "Community Volunteer",
    story:
      "Volunteering here changed my life. I met amazing people and helped the community grow stronger.",
    rating: 5,
  },
  {
    id: 2,
    name: "Fatima Begum",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    role: "Education Advocate",
    story:
      "This platform gave me the opportunity to contribute to causes I care about and learn new skills.",
    rating: 5,
  },
  {
    id: 3,
    name: "Jahid Hasan",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    role: "Youth Mentor",
    story:
      "Being a volunteer gave me a deep sense of fulfillment and the joy of making a real impact and experience.",
    rating: 5,
  },
  {
    id: 4,
    name: "Nusrat Jahan",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    role: "Healthcare Supporter",
    story:
      "Through volunteering, I discovered my passion for helping others and gained invaluable experience.",
    rating: 5,
  },
];

const SuccessStories = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-[#0f1419] dark:via-[#1d232a] dark:to-[#0f1419] py-20 px-6 w-full rounded-2xl  overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0267af]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#0a72ba]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-[#0267af] rounded-full"></div>
            <FaStar className="mx-4 text-[#0a72ba] text-2xl animate-pulse" />
            <div className="w-12 h-1 bg-gradient-to-l from-transparent to-[#0267af] rounded-full"></div>
          </div>
          
          <h2 className="text-5xl md:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-[#0267af] via-[#0a72ba] to-[#0267af] bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Real people, real impact. Hear from volunteers who transformed their communities.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map(({ id, name, image, role, story, rating }) => (
            <div
              key={id}
              onMouseEnter={() => setHoveredCard(id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white dark:bg-[#242b35] rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-3">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0267af] via-[#0a72ba] to-[#0267af] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl p-[2px]">
                  <div className="w-full h-full bg-white dark:bg-[#242b35] rounded-3xl"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8">
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <FaQuoteLeft className="text-6xl text-[#0267af]" />
                  </div>

                  {/* Profile Section */}
                  <div className="flex flex-col items-center mb-6">
                    <div className="relative mb-4">
                      {/* Animated Ring */}
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-[#0267af] to-[#0a72ba] animate-spin-slow ${hoveredCard === id ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}></div>
                      
                      {/* Image */}
                      <div className="relative w-28 h-28 rounded-full p-1 bg-gradient-to-br from-[#0267af] to-[#0a72ba]">
                        <img
                          src={image}
                          alt={name}
                          className="w-full h-full rounded-full object-cover border-4 border-white dark:border-[#242b35]"
                        />
                      </div>

                      {/* Verified Badge */}
                      <div className="absolute -bottom-2 -right-2 bg-gradient-to-br from-[#0267af] to-[#0a72ba] rounded-full p-2 shadow-lg">
                        <FaStar className="text-white text-sm" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-[#0267af] dark:text-blue-300 mb-1">
                      {name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                      {role}
                    </p>

                    {/* Rating Stars */}
                    <div className="flex gap-1 mt-3">
                      {[...Array(rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-sm" />
                      ))}
                    </div>
                  </div>

                  {/* Story */}
                  <div className="relative">
                    <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed text-center">
                      "{story}"
                    </p>
                  </div>

                  {/* Decorative Bottom Line */}
                  <div className="mt-6 h-1 w-20 mx-auto bg-gradient-to-r from-[#0267af] to-[#0a72ba] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
            Ready to write your own success story?
          </p>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-[#0267af] to-[#0a72ba] text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <span className="relative z-10">Start Volunteering Today</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg) scale(1.1);
          }
          to {
            transform: rotate(360deg) scale(1.1);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default SuccessStories;