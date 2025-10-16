import React from "react";
import { FaPhoneAlt, FaCalendarCheck, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white mx-auto container text-blue-950 py-12 border-t">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Box 1 - Free Consultation */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-4">
            <FaCalendarCheck className="text-green-300 text-4xl" />
          </div>
          <h3 className="text-xl font-semibold text-orange-500 mb-2">Free consultation</h3>
          <p className="text-blue-950  text-xl mb-4">
            Schedule a free consultation with our specialist.
          </p>
          <button className="bg-orange-400 text-white px-5 py-2 rounded-md font-medium hover:bg-orange-500 transition">
            Schedule Now
          </button>
        </div>

        {/* Box 2 - Help Desk */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-4">
            <FaPhoneAlt className="text-green-300  text-4xl" />
          </div>
          <h3 className="text-xl text-orange-500 font-semibold mb-2">Help desk</h3>
          <p className="text-blue-950 text-xl mb-2">
            Do you have questions or want more information? Call Now
          </p>
          <p className="text-orange-500 font-bold text-lg">+1-2345-678-11</p>
        </div>

        {/* Box 3 - Newsletter */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start mb-4">
            
          </div>
          <h3 className="text-xl font-semibold mb-2">Signup for newsletter</h3>
          <p className="text-blue-950 mb-4">
            and get latest news and updates
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-md w-full focus:outline-none border border-gray-300 text-gray-800"
            />
            <button className="bg-orange-400 px-4 py-2 rounded-r-md font-semibold text-white hover:bg-orange-500 transition">
              Submit
            </button>
          </div>

          {/* Social Links */}
          <div className="mt-5">
            <p className="font-medium mb-2">Follow us</p>
            <div className="flex justify-center md:justify-start gap-4 text-blue-950">
              <a href="#" className="hover:text-orange-500"><FaFacebook size={20} /></a>
              <a href="#" className="hover:text-orange-500"><FaTwitter size={20} /></a>
              <a href="#" className="hover:text-orange-500"><FaInstagram size={20} /></a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
