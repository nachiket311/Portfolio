import React from "react";
import myImage from "../assets/myImage.jpg";

const About = () => {
  return (
    <div className="bg-gray-900 text-white py-12 px-6 md:px-20">
      <h1 className="text-4xl font-bold mb-6 text-teal-400">About Me</h1>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Profile Image (Optional) */}
        <img
          src={myImage}
          alt="Profile"
          className="w-48 h-48 rounded-[50%] object-cover border-4 border-teal-500"
        />

        {/* Description */}
        <div>
          <p className="text-lg mb-4 text-gray-300">
            Hello! I'm{" "}
            <span className="text-white font-semibold">Nachiket Keraliya</span>,
            a passionate and detail-oriented full-stack developer with a strong
            foundation in web technologies like React, Node.js, MongoDB, and
            Tailwind CSS.
          </p>

          <p className="text-gray-400 mb-4">
            I love building responsive and interactive user experiences. My work
            focuses on clean code, performance, and problem-solving. I've worked
            on various projects ranging from portfolio websites to full-fledged
            web sites.
          </p>

          <p className="text-gray-400 mb-4">
            I am started my journey from HTML , CSS i make some project using
            them then learn JavaScript and make projects using all three of
            them, Since i am a Frontend Developer best in Reactjs with little
            bit knowledge of Nodejs and MongoDB that projects are not good to
            add in portfolio But I Add some interesting projects in this Portfolio.
          </p>

          <p className="text-gray-400">
            Outside of coding, I enjoy reading tech blogs, exploring new tools,
            and sharing knowledge with the community.
          </p>
        </div>
      </div>

      {/* Optional: Skills or CTA */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-teal-300 mb-4">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-gray-300">
          <li>HTML & CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>Tailwind CSS</li>
          <li>REST APIs</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
