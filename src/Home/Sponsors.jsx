import React from "react";
import { FaHandshake, FaHeart, FaUsers, FaPeopleCarry } from "react-icons/fa";

const sponsors = [
  {
    id: 1,
    name: "Helping Hands Foundation",
    icon: <FaHandshake className="text-[#0a72ba] w-16 h-16 mx-auto" />,
    website: "https://helpinghands.org",
  },
  {
    id: 2,
    name: "Care & Share",
    icon: <FaHeart className="text-[#0a72ba] w-16 h-16 mx-auto" />,
    website: "https://careandshare.org",
  },
  {
    id: 3,
    name: "Community Boosters",
    icon: <FaUsers className="text-[#0a72ba] w-16 h-16 mx-auto" />,
    website: "https://communityboosters.org",
  },
  {
    id: 4,
    name: "Volunteer Alliance",
    icon: <FaPeopleCarry className="text-[#0a72ba] w-16 h-16 mx-auto" />,
    website: "https://volunteeralliance.org",
  },
];

const Sponsors = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-8 py-10 rounded-lg bg-white dark:bg-[#1d232a] dark:border-2 dark:border-blue-300 shadow-lg text-center">
      <h2 className="text-3xl font-bold mb-8 text-[#0a72ba] dark:text-blue-400">
        Our Partners & Sponsors
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
        {sponsors.map(({ id, name, icon, website }) => (
          <a
            key={id}
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-105"
            aria-label={name}
          >
            {icon}
            <p className="mt-2 text-gray-700 dark:text-gray-300 font-semibold">{name}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
