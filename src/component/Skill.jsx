import React from "react";

const skills = [
  { name: "HTML5", iconClass: "fa-brands fa-html5 text-orange-500" },
  { name: "CSS3", iconClass: "fa-brands fa-css3-alt text-blue-600" },
  { name: "JavaScript", iconClass: "fa-brands fa-js text-yellow-400" },
  { name: "Bootstrap", iconClass: "fa-brands fa-bootstrap text-purple-600" },
  { name: "React", iconClass: "fa-brands fa-react text-cyan-400" },
  { name: "Tailwind CSS", iconClass: "fa-brands fa-css3-alt text-sky-400" }, // Tailwind doesn't have official FA icon
  { name: "Node.js", iconClass: "fa-brands fa-node-js text-green-500" },
  //   { name: "Git", iconClass: "fa-brands fa-git-alt text-red-500" },
  //   { name: "GitHub", iconClass: "fa-brands fa-github text-white" },
  //   { name: "npm", iconClass: "fa-brands fa-npm text-red-600" },
];

const Skill = () => {
  return (
    <div className="min-h-max bg-gray-950 text-white py-10 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">My Skills</h2>
      <div className="grid grid-cols-1 xm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition duration-300"
          >
            <i className={`text-5xl mb-2 ${skill.iconClass}`}></i>
            <p className="text-lg font-semibold mt-2">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
