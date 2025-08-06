import React from "react";
import TextManipulation from "../assets/TextManipulation.jpg";
import Villa from "../assets/Villa.jpg";
import Weather from "../assets/Weather.jpg";
import Todo from "../assets/Todo.jpg";
import Dashbord from "../assets/Dashbord.jpg";
import Recipy from "../assets/Recipy.jpg";
import { NavLink } from "react-router-dom";

const projects = [
  {
    title: "Text Manipulation",
    description:
      "Simple Text Manipulation Website. Like convert Your text to Upper Case to Lower Case , Remove Extra Space and many more.",
    image: TextManipulation,
    github: "https://github.com/nachiket311/Text-Manipulator",
    demo: "https://nacs-text-manipulator.netlify.app",
  },
  {
    title: "Villa Tamplate Clone",
    description:
      "A clone of a Website Template With Custom CSS And Responsive As well.",
    image: Villa,
    github: "https://github.com/nachiket311/Villa",
    demo: "https://nacs-villa-clone.netlify.app",
  },
  {
    title: "Weather App",
    description:
      "Weather Information Provider Website. Data is coming from OpenWeatherMap API.",
    image: Weather,
    github: "https://github.com/nachiket311/weatherinfo",
    demo: "https://nacs-weather-information.netlify.app",
  },
  {
    title: "Todo List",
    description:
      "A Simple Todo List Website Using Redux Toolkit And LocalStorage as well.",
    image: Todo,
    github: "https://github.com/nachiket311/Todo",
    demo: "https://nacs-todo-app.netlify.app",
  },
  {
    title: "Dashbord Clone",
    description:
      "Dashbord Clone Using Tailwind CSS. Responsive for 640px or sm breakpoint of Tailwind CSS.",
    image: Dashbord,
    github: "https://github.com/nachiket311/Dashbord",
    demo: "https://nacs-dashbord.netlify.app",
  },
  {
    title: "Recipe Finder",
    description:
      "Website for Searching recipes from Spoonacular API. It's Fully Responsive for Any Device.",
    image: Recipy,
    github: "https://github.com/nachiket311/Recipy",
    demo: "https://nacs-recipy.netlify.app",
  },
];

const ProjectsforHome = () => {
  return (
    <section
      id="projects"
      className="py-16 px-6 md:px-20 bg-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl shadow-lg transform hover:scale-105 hover:shadow-2xl transition-shadow duration-500  ease-in-out overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-teal-500">
                  {project.title}
                </h3>
                <p className="text-teal-400 mb-4">{project.description}</p>
                <div className="flex gap-6 text-lg">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <i className="fab fa-github mr-1"></i> GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 hover:text-teal-800 transition-colors"
                  >
                    <i className="fas fa-external-link-alt mr-1"></i> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6">
        <NavLink
          to="/Projects"
          className="inline-block bg-teal-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-teal-600 transition-all"
        >
          For More Details ...
        </NavLink>
      </div>
    </section>
  );
};

export default ProjectsforHome;
