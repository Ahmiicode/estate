import React from 'react';
import bgImage from "../../assets/banner.jpg"

const HeroSection = () => {
  return (
    <div className="relative h-[400px]">
      {/* Background image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-45 -z-10" />

      {/* Centered Content */}
      <div className="flex flex-col items-center justify-center h-full text-center relative z-10">
        <h1 className="text-5xl font-semibold text-white mb-2">Agent Detail</h1>
        <p className="text-gray-200 text-xl">Home / Property / Property List</p>
      </div>
    </div>
  );
};

export default HeroSection;
