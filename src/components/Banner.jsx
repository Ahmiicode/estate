import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bannerImg from "../assets/banner.jpg"; // adjust path as needed

const Banner = () => {
  const [keyword, setKeyword] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [roomCount, setRoomCount] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(
      `/propertyListing?keyword=${keyword}&type=${propertyType}&rooms=${roomCount}`
    );
  };

  return (
    <section
      className="h-[700px] text-white sm:pt-45 py-16 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-bl from-black/40 via-black/60 to-transparent"></div>

      <div className="relative max-w-5xl mx-auto mt-10 px-4 text-center">
        <p className="text-2xl mb-4">It's great to be home!</p>
        <h1 className="text-5xl font-bold mb-10">Find a property today</h1>

        {/* Popular Searches */}
        <div className="flex flex-wrap ml-10 gap-4 mb-6">
          <p className="font-bold text-xl">Most Searches</p>
          <button
            className="text-gray-200 font-medium hover:underline"
            onClick={() => setPropertyType("villa")}
          >
            Villa
          </button>
          <button
            className="text-gray-200 font-medium hover:underline"
            onClick={() => setPropertyType("apartment")}
          >
            Apartment
          </button>
          <button
            className="text-gray-200 font-medium hover:underline"
            onClick={() => setPropertyType("house")}
          >
            Private house
          </button>
        </div>

        {/* Search Bar */}
        <div className="flex flex-col md:flex-row justify-center">
          <input
            type="text"
            placeholder="Enter keywords"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-full md:w-1/3 px-4 py-4 border rounded-l-md border-gray-300 bg-white text-gray-800 focus:outline-none"
          />

          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="w-full md:w-1/4 px-4 py-4 bg-white border border-gray-300 text-gray-800 focus:outline-none"
          >
            <option value="">Select Type</option>
            <option value="office">Office</option>
            <option value="villa">Villa</option>
            <option value="apartment">Apartment</option>
            <option value="house">Private House</option>
          </select>

          <select
            value={roomCount}
            onChange={(e) => setRoomCount(e.target.value)}
            className="w-full md:w-1/4 px-4 py-4 bg-white border border-gray-300 text-gray-800 focus:outline-none"
          >
            <option value="">Select Rooms</option>
            <option value="1">1 Room</option>
            <option value="2">2 Rooms</option>
            <option value="3">3 Rooms</option>
            <option value="4+">4+ Rooms</option>
          </select>

          <button
            onClick={handleSearch}
            className="bg-orange-400 text-white px-8 py-4 rounded-r-md font-bold hover:bg-orange-500"
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
