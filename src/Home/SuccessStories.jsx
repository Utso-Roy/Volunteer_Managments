import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Rahim Uddin",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    story:
      "Volunteering here changed my life. I met amazing people and helped the community grow stronger.",
  },
  {
    id: 2,
    name: "Fatima Begum",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    story:
      "This platform gave me the opportunity to contribute to causes I care about and learn new skills.",
  },
  {
    id: 3,
    name: "Jahid Hasan",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    story:
      "Being a volunteer gave me a deep sense of fulfillment and the joy of making a real impact.",
  },
];

const SuccessStories = () => {
  return (
    <section className="bg-white dark:bg-[#1d232a] py-16 px-6 max-w-6xl mx-auto rounded-lg shadow-md ">
      <h2 className="text-4xl font-bold text-center text-[#0267af] dark:text-blue-400 mb-10">
        Success Stories
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map(({ id, name, image, story }) => (
          <div
            key={id}
            className="bg-gray-100 dark:bg-[#274153] p-6 rounded-lg shadow-lg flex flex-col items-center text-center hover:shadow-xl transition"
          >
            <img
              src={image}
              alt={name}
              className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-[#0a72ba]"
            />
            <h3 className="text-xl font-semibold text-[#0267af] dark:text-blue-300 mb-2">
              {name}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 italic">"{story}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;
