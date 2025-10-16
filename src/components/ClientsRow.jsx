import React from "react";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";

const ClientsRow = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Flex Row with client logos */}
        <div className="flex flex-wrap gap-6 justify-center items-center">
          {[client1, client2, client3, client4, client5].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`client${index + 1}`}
              className="w-24 sm:w-32 md:w-40 lg:w-44 h-16 sm:h-20 object-contain filter grayscale hover:grayscale-0 hover:scale-105 transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsRow;
