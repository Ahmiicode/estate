import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";


import Home from "./pages/Home";
import Listing from "./pages/Listing";
import Agent from "./pages/Agent";
import Property from "./pages/Property";
import PropertyListing from "./components/PropertyListing";
import PropertyDetail from "./components/PropertyDetail";
import AddProperty from "./pages/AddProperty";
import DashboardPage from "./pages/Dashboardpage";
import LoginPage from "./pages/Loginpage";


const App = () => {
  // Track logged-in user
  const [user, setUser] = useState(null);

  // Track properties added
  const [properties, setProperties] = useState([]);

  // Load user from localStorage when app starts
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    if (token && userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const addProperty = (property) => {
    setProperties([...properties, property]);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar user={user} setUser={setUser} /> {/* ✅ pass setUser */}

      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/agent" element={<Agent />} />
        <Route path="/property" element={<Property />} />
        <Route path="/propertyListing" element={<PropertyListing />} />
        <Route path="/property/:id" element={<PropertyDetail />} />

        {/* Login & Signup */}
        <Route path="/login" element={<LoginPage setUser={setUser} />} />

        {/* Protected Add Property */}
        <Route
          path="/addproperty"
          element={
            user ? (
              <AddProperty user={user} addProperty={addProperty} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Dashboard (user’s properties) */}
        <Route
          path="/dashboard"
          element={
            user ? (
              <DashboardPage user={user} properties={properties} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
