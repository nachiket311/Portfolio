import React, { useState } from "react";
import myImage from "../assets/myImage.jpg"
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = (isActive, delay = 0) =>
    `transition duration-300 ease-in-out delay-${delay} px-4 py-2 rounded text-gray-300 ${
      isActive ? "bg-teal-500 text-white" : "hover:bg-teal-600 hover:text-white"
    }`;

  return (
    <div className="relative bg-gray-950 px-6 py-4 shadow-md z-50">
      <div className="flex items-center justify-between">
        <NavLink to="/" className="flex items-center space-x-3 group">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-teal-500 group-hover:border-white transition duration-300">
            <img
              src={myImage}
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-white">
            <div className="text-xl font-bold group-hover:text-teal-500 transition duration-300">
              Port
              <span className="text-teal-500 group-hover:text-white transition duration-300">
                folio
              </span>
            </div>
            <div className="text-xs text-gray-300">Nachiket Keraliya</div>
          </div>
        </NavLink>

        {/* Hamburger Toggle */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-4">
          {["/", "/about", "/projects", "/contact"].map((path, idx) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) => navLinkClass(isActive)}
            >
              {["Home", "About Me", "Projects", "Contact Me"][idx]}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-gray-900 transition-all duration-300 ease-in-out z-40 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-6 py-4 space-y-2">
          {["/", "/about", "/projects", "/contact"].map((path, idx) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => navLinkClass(isActive, idx * 200)}
            >
              {["Home", "About Me", "Projects", "Contact Me"][idx]}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
