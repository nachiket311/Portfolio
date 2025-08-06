import React from "react";
import { NavLink } from "react-router-dom";
import myImage from "../assets/myImage.jpg";

const AboutforHome = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-20" id="about">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-300">
          Hello! I’m Nachiket Patel, a passionate web developer focused on
          building modern, fast, and responsive websites. I love working with
          React, Tailwind CSS, and creating visually compelling user interfaces.
          Whether it's a personal project or a client solution, I strive for
          perfection in every detail.
        </p>
        <div className="mt-8 flex justify-center">
          <img
            src={myImage}
            alt="Profile"
            className="rounded-full border-4 border-teal-500 w-36 h-36 object-cover"
          />
        </div>
      </div>
      <div className="mt-6">
        <NavLink
          to="/About"
          className="inline-block bg-teal-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-teal-600 transition-all"
        >
          Know More About Me ...
        </NavLink>
      </div>
    </section>
  );
};

export default AboutforHome;
