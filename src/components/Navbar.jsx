import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { FaHome } from "react-icons/fa";

const Navbar = ({ user, setUser }) => {
  const [pagesOpen, setPagesOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ logout clears localStorage + state
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-colors duration-300 border-b ${
        scrolled
          ? "bg-white border-gray-200"
          : "bg-gradient-to-t from-black/40 via-black/20 to-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-6">
        {/* Logo */}
        <div
          className={`flex items-center gap-2 font-bold text-2xl transition-colors duration-300 ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
        >
          <FaHome className="text-orange-400" size={28} />
          Estate Sale
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 ml-12 font-medium">
          <Link
            to="/"
            className={`${
              scrolled ? "text-gray-800" : "text-white"
            } hover:text-orange-400 transition`}
          >
            Home
          </Link>
          <Link
            to="/listing"
            className={`${
              scrolled ? "text-gray-800" : "text-white"
            } hover:text-orange-400 transition`}
          >
            Listing
          </Link>
          <Link
            to="/property"
            className={`${
              scrolled ? "text-gray-800" : "text-white"
            } hover:text-orange-400 transition`}
          >
            Property
          </Link>

          <div className="relative">
            <button
              onClick={() => setBlogOpen(!blogOpen)}
              className={`${
                scrolled ? "text-gray-800" : "text-white"
              } hover:text-orange-400 transition flex items-center gap-1`}
            >
              Blog <FiChevronDown />
            </button>
            {blogOpen && (
              <div className="absolute top-full mt-2 bg-white text-gray-800 rounded-md shadow-lg w-40 z-10">
                <Link
                  to="/blog/blog1"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Blog 1
                </Link>
                <Link
                  to="/blog/blog2"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Blog 2
                </Link>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => setPagesOpen(!pagesOpen)}
              className={`${
                scrolled ? "text-gray-800" : "text-white"
              } hover:text-orange-400 transition flex items-center gap-1`}
            >
              Pages <FiChevronDown />
            </button>
            {pagesOpen && (
              <div className="absolute top-full mt-2 bg-white text-gray-800 rounded-md shadow-lg w-40 z-10">
                <Link
                  to="/agent"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Agent
                </Link>
                <Link
                  to="/pages/page2"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Page 2
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Right - Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/dashboard">
            <button className="flex items-center gap-2 px-6 py-2 rounded-full font-bold bg-orange-400 text-white hover:bg-orange-500 transition">
              <FaHome size={18} /> Add Listing
            </button>
          </Link>

          {/* If user not logged in */}
          {!user && (
            <>
              <Link to="/login">
                <button className="px-5 py-2 rounded-full font-semibold bg-white text-orange-400 border border-orange-400 hover:bg-orange-400 hover:text-white transition">
                  Login
                </button>
              </Link>
              <Link to="/login">
                <button className="px-5 py-2 rounded-full font-semibold bg-orange-400 text-white hover:bg-orange-500 transition">
                  Sign Up
                </button>
              </Link>
            </>
          )}

          {/* If user logged in */}
          {user && (
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-800">
                {user.name || user.email}
              </span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-full bg-orange-400 text-white hover:bg-orange-500 transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white text-gray-800 shadow-lg px-6 py-4 space-y-4">
          <Link to="/" className="block hover:text-orange-400">
            Home
          </Link>
          <Link to="/listing" className="block hover:text-orange-400">
            Listing
          </Link>
          <Link to="/property" className="block hover:text-orange-400">
            Property
          </Link>

          <div>
            <button
              onClick={() => setBlogOpen(!blogOpen)}
              className="flex items-center gap-1 w-full text-left hover:text-orange-400"
            >
              Blog <FiChevronDown />
            </button>
            {blogOpen && (
              <div className="pl-4 space-y-2">
                <Link
                  to="/blog/blog1"
                  className="block hover:text-orange-400"
                >
                  Blog 1
                </Link>
                <Link
                  to="/blog/blog2"
                  className="block hover:text-orange-400"
                >
                  Blog 2
                </Link>
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => setPagesOpen(!pagesOpen)}
              className="flex items-center gap-1 w-full text-left hover:text-orange-400"
            >
              Pages <FiChevronDown />
            </button>
            {pagesOpen && (
              <div className="pl-4 space-y-2">
                <Link to="/agent" className="block hover:text-orange-400">
                  Agent
                </Link>
                <Link
                  to="/pages/page2"
                  className="block hover:text-orange-400"
                >
                  Page 2
                </Link>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <Link to="/dashboard">
              <button className="flex items-center gap-2 w-full px-4 py-2 rounded-full font-bold bg-orange-400 text-white hover:bg-orange-500 transition">
                <FaHome size={18} /> Add Listing
              </button>
            </Link>

            {!user && (
              <>
                <Link to="/login">
                  <button className="w-full px-4 py-2 rounded-full font-semibold bg-white text-orange-400 border border-orange-400 hover:bg-orange-400 hover:text-white transition">
                    Login
                  </button>
                </Link>
                <Link to="/login">
                  <button className="w-full px-4 py-2 rounded-full font-semibold bg-orange-400 text-white hover:bg-orange-500 transition">
                    Sign Up
                  </button>
                </Link>
              </>
            )}

            {user && (
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-gray-800">
                  {user.name || user.email}
                </span>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-full bg-orange-400 text-white hover:bg-orange-500 transition"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
