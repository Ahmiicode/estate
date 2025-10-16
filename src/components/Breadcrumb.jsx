import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ items }) => {
  return (
    <nav className="text-gray-500 text-sm mb-6" aria-label="breadcrumb">
      <ol className="flex space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index !== 0 && <span className="mx-2">{" > "}</span>}
            {item.path ? (
              <Link
                to={item.path}
                className="hover:text-orange-500 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-700">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
