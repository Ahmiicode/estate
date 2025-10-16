import React from "react";
import PropertyListing from "../components/PropertyListing";
import { Link } from "react-router-dom";

const Listing = () => {
  return (
    <div>
      {/* Top Banner with Breadcrumb */}
      <div className="bg-white py-30 text-center shadow-sm">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Property Listing
        </h1>

        {/* Breadcrumb */}
        <nav className="text-gray-600 text-sm">
          <ul className="flex justify-center space-x-2">
            <li>
              <Link to="/" className="hover:text-orange-500">
                Home
              </Link>
              <span className="mx-2">›</span>
            </li>
            <li>
              <Link to="/property" className="hover:text-orange-500">
                Property
              </Link>
              <span className="mx-2">›</span>
            </li>
            <li className="text-gray-800 font-medium">
              Property Listing
            </li>
          </ul>
        </nav>
      </div>

      {/* Property Listing section */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <PropertyListing />
      </div>
    </div>
  );
};

export default Listing;

