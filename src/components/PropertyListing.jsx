import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const PropertyListing = () => {
  const [allProperties, setAllProperties] = useState([]);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  // Fetch all properties from backend
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/property");
        setAllProperties(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  // Apply filters when URL query params change
  useEffect(() => {
    if (!allProperties.length) return;

    const params = new URLSearchParams(location.search);
    let filtered = [...allProperties];

    // keyword filter (title search)
    if (params.get("keyword")) {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(params.get("keyword").toLowerCase())
      );
    }

    // type filter
    if (params.get("type")) {
      filtered = filtered.filter((p) => p.type === params.get("type"));
    }

    // rooms filter (mapped to bedrooms field in DB)
    if (params.get("rooms")) {
      const roomsFilter = Number(params.get("rooms"));
      filtered = filtered.filter((p) => Number(p.bedrooms) === roomsFilter);
    }

    // ✅ optional bathroom filter
    if (params.get("bathrooms")) {
      const bathsFilter = Number(params.get("bathrooms"));
      filtered = filtered.filter((p) => Number(p.bathrooms) === bathsFilter);
    }

    setProperties(filtered);
  }, [location.search, allProperties]);

  if (loading) return <p className="text-center p-6">Loading properties...</p>;

  return (
    <section className="bg-white container mx-auto py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-blue-950 text-center mb-12">
          Top Properties
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties.length > 0 ? (
            properties.map((property) => (
              <div
                key={property._id}
                onClick={() => navigate(`/property/${property._id}`)}
                className="relative cursor-pointer group rounded-lg shadow-md hover:shadow-2xl transition duration-500 overflow-hidden"
              >
                {property.images?.length > 0 && (
                  <img
                    src={`http://localhost:5000${property.images[0]}`}
                    alt={property.title}
                    className="w-full h-64 object-cover transform transition duration-500 group-hover:-translate-y-2 group-hover:scale-105"
                  />
                )}

                <div className="absolute bottom-0 left-0 w-full p-4 text-white bg-gradient-to-t from-black/40 via-black/20 to-transparent transform translate-y-1 group-hover:translate-y-0 transition-all duration-500">
                  <h3 className="text-lg font-bold">{property.title}</h3>
                  <p className="text-sm">{property.location}</p>
                  <p className="text-xs">
                    {property.bedrooms} Bed • {property.bathrooms} Bath
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-3 text-gray-500">
              No properties match your search.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PropertyListing;
