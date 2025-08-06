import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const navLinkClass = (isActive) =>
    `transition duration-300 ease-in-out px-4 py-1 rounded text-md ${
      isActive
        ? "bg-teal-500 text-white"
        : "text-gray-300 hover:bg-teal-600 hover:text-white"
    }`;

  return (
    <footer className="bg-gray-950 text-white py-10 z-50">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 xm:grid-cols-2 gap-8">
        {/* Column 1: Navigation Links */}
        <div>
          <h2 className="text-xl text-center font-semibold mb-4">Navigation</h2>
          <ul className="space-y-4 text-center">
            {["/", "/about", "/projects", "/contact"].map((path, idx) => (
              <li key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) => navLinkClass(isActive)}
                >
                  {["Home", "About Me", "Projects", "Contact Me"][idx]}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: Social Links */}
        <div>
          <h2 className="text-xl text-center font-semibold mb-4">Hire Me On</h2>
          <div className="flex flex-col items-center space-y-4">
            {/* Upwork */}
            <a
              href="https://www.upwork.com/freelancers/~01831309a81654b979"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-teal-400 text-4xl transition transform hover:scale-110 duration-300"
            >
              <i className="fab fa-upwork"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
