import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddProperty({ user }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    location: "",
    type: "",
    bedrooms: "",
    bathrooms: "",
    size: "",
    amenities: "",
  });

  const [images, setImages] = useState([]); // store actual files
  const [preview, setPreview] = useState([]); // store preview URLs

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    // Add new files to old ones
    const newFiles = [...images, ...files];
    setImages(newFiles);

    // Generate preview URLs
    const previewUrls = newFiles.map((file) => URL.createObjectURL(file));
    setPreview(previewUrls);
  };

  // Remove selected image before submitting
  const handleRemoveImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    const updatedPreview = preview.filter((_, i) => i !== index);

    setImages(updatedImages);
    setPreview(updatedPreview);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        if (key === "amenities") {
          data.append(key, JSON.stringify(value.split(",")));
        } else {
          data.append(key, value);
        }
      });

      // Append all selected images
      images.forEach((file) => data.append("images", file));

      // JWT token from localStorage
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:5000/api/property",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Property submitted:", res.data);
      alert("Property submitted for approval!");
      navigate("/dashboard");
    } catch (err) {
      console.error(err.response?.data || err);
      alert("Failed to submit property.");
    }
  };

  return (
    <div className="max-w-3xl mt-10 mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Add Property</h2>

      <form
        onSubmit={handleSubmit}
        className="grid gap-4 bg-white p-6 rounded-xl shadow-md"
      >
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
          className="border rounded-lg px-3 py-2"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2"
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          required
          className="border rounded-lg px-3 py-2"
        />

        <input
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          required
          className="border rounded-lg px-3 py-2"
        />

        <input
          name="type"
          placeholder="Type (House, Apartment...)"
          value={form.type}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2"
        />

        <div className="grid grid-cols-3 gap-4">
          <input
            name="bedrooms"
            type="number"
            placeholder="Bedrooms"
            value={form.bedrooms}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2"
          />
          <input
            name="bathrooms"
            type="number"
            placeholder="Bathrooms"
            value={form.bathrooms}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2"
          />
          <input
            name="size"
            type="number"
            placeholder="Size (sq ft)"
            value={form.size}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2"
          />
        </div>

        <input
          name="amenities"
          placeholder="Amenities (comma separated)"
          value={form.amenities}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2"
        />

        {/* Image upload */}
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          className="border rounded-lg px-3 py-2"
        />

        {/* Preview section */}
        {preview.length > 0 && (
          <div className="grid grid-cols-3 gap-3">
            {preview.map((src, idx) => (
              <div key={idx} className="relative">
                <img
                  src={src}
                  alt={`Preview ${idx}`}
                  className="w-full h-32 object-cover rounded"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(idx)}
                  className="absolute top-1 right-1 bg-red-600 text-white rounded-full px-2 py-1 text-xs"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
        >
          Submit Property
        </button>
      </form>
    </div>
  );
}
