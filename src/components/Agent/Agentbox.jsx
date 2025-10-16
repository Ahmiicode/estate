import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

import agents from '../../data/agents'

const Agentbox = () => {
  return (
    <div className="space-y-6">
      {agents.map((agent) => (
        <Link
          to={`/agent/${agent.id}`}
          key={agent.id}
          className="block transition-transform duration-200 hover:scale-[1.01]"
        >
          <div className="flex flex-col md:flex-row bg-white shadow-md overflow-hidden rounded-lg hover:shadow-lg">
            {/* Left: Image */}
            <div className="md:w-1/2 w-full h-72 md:h-[370px]">
              <img
                src={agent.image}
                alt={agent.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: Details */}
            <div className="p-8 flex flex-col justify-between md:w-1/2">
              <div>
                <h3 className="text-3xl font-semibold text-gray-800">{agent.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{agent.title}</p>

                <ul className="text-lg text-gray-700 space-y-3">
                  <li><strong>Office:</strong> {agent.office}</li>
                  <li><strong>Mobile:</strong> {agent.mobile}</li>
                  <li><strong>Fax:</strong> {agent.fax}</li>
                  <li><strong>Email:</strong> {agent.email}</li>
                </ul>
              </div>

              {/* Social Icons */}
              <div className="mt-6 flex space-x-4 text-white">
                <a href="#" className="bg-orange-400 p-3 rounded"><FaFacebookF /></a>
                <a href="#" className="bg-orange-400 p-3 rounded"><FaTwitter /></a>
                <a href="#" className="bg-orange-400 p-3 rounded"><FaLinkedinIn /></a>
                <a href="#" className="bg-orange-400 p-3 rounded"><FaInstagram /></a>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Agentbox;
