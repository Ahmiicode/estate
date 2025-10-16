import React, { useState } from 'react';

const FindAgent = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    city: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Search:', formData);
  };

  return (
    <div className="bg-gray-100 p-6 max-w-md mx-auto shadow-lg rounded-lg">
      <h3 className="text-3xl font-bold text-gray-800 text-center p-9 mb-5">Find Agents</h3>
      <hr className='text-gray-300 mb-9' />
      <form onSubmit={handleSubmit} className="space-y-9">
        
        {/* Agent Name */}
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Agent Name"
            className="w-full border border-gray-300 px-4 py-5 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        {/* Category Dropdown */}
        <div>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-5 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <option value="">All Categories</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="luxury">Luxury</option>
          </select>
        </div>

        {/* City Dropdown */}
        <div>
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-5 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <option value="">All Cities</option>
            <option value="new-york">New York</option>
            <option value="los-angeles">Los Angeles</option>
            <option value="chicago">Chicago</option>
            <option value="miami">Miami</option>
          </select>
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="w-full bg-orange-400 font-semibold text-white py-5 hover:bg-orange-500 transition rounded-lg"
        >
          Search Agent
        </button>
      </form>
    </div>
  );
};

export default FindAgent;
