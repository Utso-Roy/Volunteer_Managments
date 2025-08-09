import React from "react";
import { FaUsers, FaRegCalendarCheck, FaClock } from "react-icons/fa";
import CountUp from "react-countup";

const statsData = [
  {
    id: 1,
    title: "Volunteers Joined",
    value: 1250,
    icon: <FaUsers className="w-12 h-12 text-blue-600" />,
  },
  {
    id: 2,
    title: "Successful Events",
    value: 85,
    icon: <FaRegCalendarCheck className="w-12 h-12 text-green-600" />,
  },
  {
    id: 3,
    title: "Volunteer Hours",
    value: 4320,
    icon: <FaClock className="w-12 h-12 text-purple-600" />,
  },
];

const StatisticsSection = () => {
  return (
    <section className="max-w-6xl bg-white dark:bg-gray-700 rounded-lg mx-auto px-6 shadow-lg  py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#0267af] dark:text-white">
        Our Impact in Numbers
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {statsData.map(({ id, title, value, icon }) => (
          <div
            key={id}
            className="bg-gray-100 dark:bg-[#1d232a] rounded-lg shadow-lg p-8 flex flex-col items-center space-y-4"
          >
            <div>{icon}</div>
            <p className="text-4xl font-extrabold text-gray-900 dark:text-white">
              <CountUp end={value} duration={5} separator="," />
            </p>
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
              {title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatisticsSection;
