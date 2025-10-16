import React from "react";
import AboutImage from "../assets/who.jpg";
import { FiCheck } from "react-icons/fi";

const WhoWeAre = () => {
  const features = [
    "Outstanding property",
    "Social responsibility",
    "Get expert advice",
    "Group structure",
    "Specialist services",
    "Vision & strategy",
    
  ];

  return (
    <section className="mx-auto container px-4 py-12 sm:py-16">
      <div className="flex flex-col lg:flex-row items-stretch gap-10 sm:gap-12">
        {/* Left - Image */}
        <div className="lg:w-1/2 w-full">
          <img
            src={AboutImage}
            alt="Who We Are"
            className="w-full h-72 sm:h-96 lg:h-full object-cover rounded-lg"
          />
        </div>

        {/* Right - Text */}
        <div className="lg:w-1/2 flex flex-col justify-center space-y-5 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-700">Who We Are</h2>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl text-blue-950 font-bold">
            The experts in local and international property
          </h3>
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
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-base sm:text-lg text-gray-700"
              >
                <FiCheck className="text-orange-500 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>

          <button className="bg-orange-500 text-white px-4 py-3 rounded-md w-full sm:w-auto font-medium hover:bg-orange-600 transition">
            Discover our services
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
