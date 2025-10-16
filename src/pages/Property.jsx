import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import axios from "axios";

const Property = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Track current image index for each property
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/property");
        setProperties(res.data);

        // Initialize current image index for each property
        const initialIndexes = {};
        res.data.forEach((p) => {
          initialIndexes[p._id] = 0;
        });
        setCurrentImageIndex(initialIndexes);
      } catch (err) {
        console.error(err.response?.data || err);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) return <p className="p-6 text-center">Loading properties...</p>;
  if (!properties.length)
    return <p className="p-6 text-center">No properties available.</p>;

  const handlePrev = (id, total) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [id]: prev[id] === 0 ? total - 1 : prev[id] - 1,
    }));
  };

  const handleNext = (id, total) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [id]: prev[id] === total - 1 ? 0 : prev[id] + 1,
    }));
  };

  return (
    <section className="bg-white container mx-auto py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-blue-950 text-center mb-12">
          All Properties
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div
              key={property._id}
              className="relative rounded-lg shadow-md hover:shadow-2xl transition duration-500 overflow-hidden"
            >
              {/* Image Carousel */}
              {property.images?.length > 0 && (
                <div className="relative">
                  <img
                    src={`http://localhost:5000${property.images[currentImageIndex[property._id] || 0]}`}
                    alt={property.title}
                    className="w-full h-64 object-cover"
                  />

                  {/* Carousel buttons */}
                  {property.images.length > 1 && (
                    <>
<button
  onClick={() => handlePrev(property._id, property.images.length)}
  className="absolute top-1/2 left-2 transform -translate-y-1/2  bg-opacity-50 text-white p-2 rounded-full text-xl hover:bg-opacity-70"
>
  <FaArrowLeft />
</button>

<button
  onClick={() => handleNext(property._id, property.images.length)}
  className="absolute top-1/2 right-2 transform -translate-y-1/2  bg-opacity-50 text-white  p-2 rounded-full text-xl hover:bg-opacity-70"
>
  <FaArrowRight />
</button>

                    </>
                  )}
                </div>
              )}

              {/* Property Details */}
              <div
                onClick={() => navigate(`/property/${property._id}`)}
                className="p-4 bg-white cursor-pointer"
              >
                <h3 className="text-lg font-bold">{property.title}</h3>
                <p className="text-gray-500">{property.location}</p>
                <p className="text-orange-500 font-semibold">
                  ${property.price?.toLocaleString()}
                </p>
                <p className="text-gray-700 mt-2">{property.description}</p>

                <div className="mt-2 text-gray-600 flex flex-wrap gap-2">
                  {property.bedrooms && <span>🛏 {property.bedrooms} Bedrooms</span>}
                  {property.bathrooms && <span>🛁 {property.bathrooms} Bathrooms</span>}
                  {property.sqft && <span>📐 {property.sqft} sq ft</span>}
                  {property.details?.rooms && <span>🛋 {property.details.rooms} Rooms</span>}
                  {property.amenities?.length > 0 && (
                    <span>✨ Amenities: {property.amenities.join(", ")}</span>
                  )}
                </div>

                {property.listedBy && (
                  <p className="mt-2 text-gray-500 text-sm">
                    Submitted by: {property.listedBy.name} ({property.listedBy.email})
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Property;
