import React from "react";
import { FaHome, FaKey, FaMapMarkedAlt } from "react-icons/fa";

const Services = () => {
  const serviceData = [
    {
      icon: <FaHome size={30} className="text-orange-500 mb-4" />,
      title: "Buy a home",
      description:
        "Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet ipsum primis in faucibus orci.",
    },
    {
      icon: <FaKey size={30} className="text-orange-500 mb-4" />,
      title: "Rent a home",
      description:
        "Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet ipsum primis in faucibus orci.",
    },
    {
      icon: <FaMapMarkedAlt size={30} className="text-orange-500 mb-4" />,
      title: "See neighbourhoods",
      description:
        "Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet ipsum primis in faucibus orci.",
    },
  ];

  return (
    <section className="py-16 container mx-auto bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className="  p-6 flex flex-col items-center"
            >
              {service.icon }
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a
                href="#"
                className="text-orange-500 font-semibold hover:underline"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
