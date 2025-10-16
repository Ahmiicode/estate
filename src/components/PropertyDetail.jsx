import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Breadcrumb from "./Breadcrumb";

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/property/${id}`);
        setProperty(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProperty();
  }, [id]);

  if (loading) return <p className="p-6 text-center">Loading property...</p>;
  if (!property) return <p className="p-6 text-center">Property not found</p>;

  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Property", path: "/propertyListing" },
    { label: property.title },
  ];

  return (
    <div className="max-w-6xl mt-33 mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Two Column Layout */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column */}
        <div className="lg:w-3/6 space-y-6">
          {/* Main Image */}
          {property.images?.length > 0 && (
            <img
              src={`http://localhost:5000${property.images[0]}`}
              alt={property.title}
              className="w-full h-96 object-cover rounded-lg shadow-md"
            />
          )}

          {/* Title + Location + Price */}
          <div>
            <h1 className="text-3xl font-bold">{property.title}</h1>
            <p className="text-gray-500">{property.location}</p>
            <p className="text-orange-500 font-bold text-xl mt-2">
              ${property.price}
            </p>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-2xl font-semibold mb-2">Description</h2>
            <p className="text-gray-700">{property.description}</p>
          </div>

          {/* Property Details */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Property Details</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <li><strong>Bedrooms:</strong> {property.bedrooms}</li>
              <li><strong>Bathrooms:</strong> {property.bathrooms}</li>
              <li><strong>Size:</strong> {property.sqft} sq ft</li>
              <li><strong>Rooms:</strong> {property.details?.rooms}</li>
              <li><strong>Year Built:</strong> {property.details?.builtYear}</li>
              <li><strong>Price:</strong> ${property.details?.propertyPrice}</li>
            </ul>
          </div>

          {/* Amenities */}
          {property.amenities?.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold mb-4">Amenities</h2>
              <ul className="flex flex-wrap gap-3">
                {property.amenities.map((amenity, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 text-black rounded-full text-lg bg-gray-200"
                  >
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Column - Agent Info */}
        <div className="lg:w-2/4">
          <div className="flex flex-col bg-white shadow-md overflow-hidden rounded-lg hover:shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Agent Information</h2>

            <h3 className="text-xl font-semibold text-gray-800">
              {property.listedBy?.name || "Agent Name"}
            </h3>
            <p className="text-gray-600 mb-4">
              {property.listedBy?.email || "Email not available"}
            </p>

            <ul className="text-gray-700 space-y-2">
              <li><strong>Office:</strong> {property.listedBy?.office || "N/A"}</li>
              <li><strong>Mobile:</strong> {property.listedBy?.mobile || "N/A"}</li>
              <li><strong>Fax:</strong> {property.listedBy?.fax || "N/A"}</li>
            </ul>

            <p className="mt-4 text-gray-500 text-sm">
              This property was listed by{" "}
              <strong>{property.listedBy?.name || "Unknown"}</strong>
            </p>

            {/* Social Links Placeholder */}
            <div className="mt-6 flex space-x-4 text-white">
              <a href="#" className="bg-orange-400 p-3 rounded">FB</a>
              <a href="#" className="bg-orange-400 p-3 rounded">TW</a>
              <a href="#" className="bg-orange-400 p-3 rounded">LN</a>
              <a href="#" className="bg-orange-400 p-3 rounded">IG</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
