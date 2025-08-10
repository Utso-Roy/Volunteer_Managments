import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaHandsHelping } from "react-icons/fa";

const Event = () => {
  const events = [
    {
      id: 1,
      title: "Beach Cleanup Campaign",
      date: "August 25, 2025",
      location: "Cox's Bazar",
      description:
        "Join us to clean the beach and spread awareness about ocean conservation.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    },
    {
      id: 2,
      title: "Tree Plantation Drive",
      date: "September 5, 2025",
      location: "Dhaka University",
      description:
        "Be part of our tree plantation program to create a greener future.",
      image:
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800",
    },
    {
      id: 3,
      title: "Blood Donation Camp",
      date: "October 10, 2025",
      location: "Chittagong Medical College",
      description:
        "Help save lives by participating in our blood donation event.",
      image:
        "https://i.ibb.co/8gCf3RtH/blood.jpg",
    },
    {
      id: 4,
      title: "Community Food Drive",
      date: "November 15, 2025",
      location: "Khulna City Hall",
      description:
        "Help distribute food to underprivileged families in the community.",
      image:
        "https://i.ibb.co/nsxf2krJ/Food.jpg",
    },
  ];

  return (
    <section className="px-4 py-10 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold text-[#0267af] dark:text-white text-center mb-8">
          Upcoming Events
        </h2>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              {/* Image */}
              <img
                src={event.image}
                alt={event.title}
                className="h-48 w-full object-cover"
              />

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {event.title}
                </h3>

                {/* Date & Location */}
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 flex items-center gap-2">
                  <FaCalendarAlt className="text-blue-500" /> {event.date}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-red-500" /> {event.location}
                </p>


                {/* Button */}
                <button className="mt-4 w-full btn btn-outline text-[#0267af] hover:bg-[#0267af] hover:text-white">
                  <FaHandsHelping /> Join Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Event;
