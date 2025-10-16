import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AuthPage({ setUser }) {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login/SignUp
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const API_URL = "http://localhost:5000/api/user";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isLogin ? `${API_URL}/login` : `${API_URL}/register`;
      const res = await axios.post(url, formData);

      if (res.data.success) {
        // Save token
        localStorage.setItem("token", res.data.token);

        // Save user info
        const userData = res.data.user || { name: res.data.name, email: res.data.email };
        localStorage.setItem("user", JSON.stringify(userData));

        // Update parent state
        setUser(userData);

        // Redirect to dashboard
        navigate("/dashboard");
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      console.error(err);
      alert(isLogin ? "Login failed. Try again." : "Sign up failed. Try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">{isLogin ? "Login" : "Sign Up"}</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          )}

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <button
            type="submit"
            className="w-full bg-orange-400 text-white py-2 rounded-lg font-semibold hover:bg-orange-500 transition"
          >
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span
            className="text-orange-400 cursor-pointer hover:underline"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}
