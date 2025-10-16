import React from "react";
import properties from "../assets/assest"; // importing your property data

// Pick some properties to represent cities (reusing property images for demo)
const cities = [
  { name: "Newyork", listings: 4, img: properties[0].image },
  { name: "California", listings: 4, img: properties[1].image },
  { name: "Las Vegas", listings: 4, img: properties[2].image },
  { name: "Malaysia", listings: 4, img: properties[3].image },
  { name: "Paris", listings: 4, img: properties[4].image },
  { name: "New Jersey", listings: 4, img: properties[5].image },
  { name: "France", listings: 4, img: properties[0].image }, // reused p1 again
];

const ExploreCities = () => {
  return (
    <section className="py-16 mx-auto w-full container bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-xl text-gray-400 font-bold mb-2">Explore Cities</h2>
        <p className="text-blue-950 text-5xl mb-10">Popular Locations</p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cities.map((city, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition"
            >
              {/* City Image */}
              <img
                src={city.img}
                alt={city.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition"></div>

              {/* Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white 
                              transform translate-y-6 group-hover:translate-y-0 transition duration-500">
                <h3 className="text-xl font-semibold">{city.name}</h3>
                <p className="text-sm">{city.listings} listings</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreCities;
