import React from "react";
import { FaSearch, FaUserTie, FaHome } from "react-icons/fa";

const features = [
  {
    icon: <FaSearch className="text-white text-xl" />,
    title: "Search for home",
    subtitle: "Your One-Stop Shop for Finding Your Dream Home",
    description:
      "Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor in orci.",
  },
  {
    icon: <FaUserTie className="text-white text-xl" />,
    title: "Connect to an agent",
    subtitle: "Schedule a Free, No-Obligation Appointment",
    description:
      "Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor in orci.",
  },
  {
    icon: <FaHome className="text-white text-xl" />,
    title: "Find an agent",
    subtitle: "Understand the Value of Your Property",
    description:
      "Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor in orci.",
  },
];

const AllInOne = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-blue-950 mb-2">
          All in one place
        </h2>
        <p className="text-gray-600 mb-12 text-sm sm:text-base">
          Your One-Stop Shop for Finding Your Dream Home
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-6 bg-gray-50 rounded-xl hover:shadow-xl transition"
            >
              {/* Icon */}
              <div className="absolute -top-6 left-6 w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center shadow-lg">
                {feature.icon}
              </div>

              {/* Content */}
              <div className="mt-8">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-950 mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm font-medium text-gray-700 mb-2">
                  {feature.subtitle}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllInOne;
