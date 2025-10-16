import React from "react";
import AboutImage from "../assets/who1.jpg";
import { FiCheck } from "react-icons/fi";

const OurClient = () => {
  const features = [
    "Outstanding property",
    "Social responsibility",
    "Get expert advice",
    "Group structure",
    "Specialist services",
    "Vision & strategy",
  ];

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
      <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">
        {/* Left - Image */}
        <div className="lg:w-1/2 w-full">
          <img
            src={AboutImage}
            alt="Who We Are"
            className="w-full h-auto max-h-[400px] sm:max-h-[500px] object-cover rounded-lg"
          />
        </div>

        {/* Right - Text */}
        <div className="lg:w-1/2 flex flex-col justify-center space-y-6">
          <h2 className="text-lg sm:text-xl text-gray-400 font-bold">
            Our clients
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl text-blue-950 font-bold">
              We value client relationships
            </h3>
            <div className="text-left sm:text-right">
              <p className="text-2xl sm:text-3xl font-extrabold text-blue-950">
                45,200
              </p>
              <p className="text-gray-600 text-sm">Satisfied customers</p>
            </div>
          </div>

          <p className="text-base sm:text-lg text-gray-600">
            We have over 15 years of experience, over 20,000 people work for us
            in more than 70 countries all over the world. Learn more about our
            work! Lorem ipsum vive dolor sit amet.
          </p>
          <p className="text-sm sm:text-base text-gray-600">
            Viverra feugiat. Pellentesque libero ut justo, ultrices in ligula.
            Semper at tempufddfel lorem ipsum.
          </p>

          {/* Features */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {features.map((feature, index) => (
              <li
                key={index}
                className="px-2 sm:px-4 py-2 flex items-center gap-2 text-base sm:text-lg"
              >
                <FiCheck className="text-gray-400 shrink-0" />
                {feature}
              </li>
            ))}
          </ul>

          <button className="bg-orange-500 text-white font-medium rounded-lg px-4 py-3 w-fit hover:bg-orange-600 transition">
            Discover our services
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurClient;
