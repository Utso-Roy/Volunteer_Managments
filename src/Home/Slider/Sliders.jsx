import React from "react";
import Slider from "react-slick";

const Sliders = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
  };

  const slides = [
    {
      image:
        "https://i.ibb.co.com/0RLTXLcZ/Volunteer-Group-Volunteering-Header.png", 
      title: "Join Hands to Make a Difference",
      subtitle: "Become a volunteer and serve your community today.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80", // Helping hands
      title: "Urgent Volunteers Needed",
      subtitle: "We need helping hands for our upcoming event.",
    },
    {
      image:
        "https://i.ibb.co.com/hFwg2QrY/istockphoto-472551260-612x612.jpg", // Smiling volunteer
      title: "Every Small Help Counts",
      subtitle: "Donate your time and skills to help the needy.",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto my-4 overflow-hidden shadow-lg">
      <Slider {...settings}>
        {slides.map(({ image, title, subtitle }, index) => (
          <div key={index} className="relative h-96 md:h-[500px]">
            {/* Background Image */}
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover brightness-50"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gray-800 opacity-40"></div>

            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6">
              <h2 className="text-3xl md:text-5xl font-extrabold text-center leading-tight">
                {title}
              </h2>
              <p className="mt-4 text-lg md:text-2xl text-center max-w-xl">
                {subtitle}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Sliders;
