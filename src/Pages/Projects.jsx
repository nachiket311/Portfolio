import React, { useState } from "react";
import TextManipulation from "../assets/TextManipulation.jpg";
import Villa from "../assets/Villa.jpg";
import Weather from "../assets/Weather.jpg";
import Todo from "../assets/Todo.jpg";
import Dashbord from "../assets/Dashbord.jpg";
import Recipy from "../assets/Recipy.jpg";

const projects = [
  {
    title: "Text Manipulation",
    description:
      "This is my first project after learning React, inspired by an online course. While the original version focused on functionality, I went a step further by implementing a fully responsive design using custom CSS — without relying on any CSS frameworks. The app allows users to convert text to UPPERCASE, lowercase, capitalize words, swap case, remove extra spaces, and copy the result easily. It also displays word count, character count, and an estimated reading time, making it useful for writers, students, and developers. This project helped me understand React basics, props, state handling, and the value of clean, responsive design.",
    image: TextManipulation,
    demo: "https://nacs-text-manipulator.netlify.app",
  },
  {
    title: "Villa Tamplate Clone",
    description:
      "This project is a fully responsive clone of a modern website template, built entirely using custom CSS without any external UI libraries. The goal of this project was to replicate the look and feel of the original design while ensuring mobile-first responsiveness across all screen sizes. I focused on clean, maintainable CSS and flexible layout structures using Flexbox. Key sections such as the navbar, Carousel, features, and footer were carefully crafted to match the original design. This project showcases my ability to write structured CSS, manage layouts, and create pixel-perfect responsive designs from scratch.",
    image: Villa,
    demo: "https://nacs-villa-clone.netlify.app",
  },
  {
    title: "Weather App",
    description:
      "WeatherInfo is a simple and responsive weather application built using React and styled with Bootstrap. This project was primarily focused on learning how to fetch and display real-time weather data using the OpenWeatherMap API. The interface is clean and minimal, with basic input functionality to search for any city and view its current weather conditions such as temperature, humidity, and weather description. While the design is kept simple, the main goal of this project was to strengthen my understanding of API integration, state management in React, and handling asynchronous data fetching.",
    image: Weather,
    demo: "https://nacs-weather-information.netlify.app",
  },
  {
    title: "Todo List",
    description:
      "This Todo App was originally inspired by an online course, but I extended it significantly to make it my own and deepen my understanding of real-world app features. I added a checklist to visually mark completed tasks and implemented drag-and-drop reordering so users can prioritize their todos. The app uses Tailwind CSS for styling, Redux Toolkit for state management, and localStorage to ensure all data persists even after a page refresh. These enhancements helped me better understand concepts like state persistence, component interaction, and UI feedback — turning a simple learning project into a fully functional, customizable task manager..",
    image: Todo,
    demo: "https://nacs-todo-app.netlify.app",
  },
  {
    title: "Dashbord Clone",
    description:
      "This Dashboard Clone project was built to deepen my understanding of Tailwind CSS, especially its responsive design features. While it's not a pixel-perfect replica, I focused on making it visually similar to the original layout and ensuring it works well across devices. I optimized the layout specifically for the sm (640px) Tailwind breakpoint, so users on mobile or smaller screens are encouraged to view it in desktop mode or full-screen for the best experience. Through this project, I gained practical experience with Tailwind's utility-first classes, responsive breakpoints, and layout structuring.",
    image: Dashbord,
    demo: "https://nacs-dashbord.netlify.app",
  },

  {
    title: "Recipe Finder",
    description:
      "The Recipe Finder App allows users to search for delicious recipes by ingredient or name, using real-time data from the Spoonacular API. I built this app with Tailwind CSS and added a custom breakpoint for 320px to ensure a smooth user experience on very small screens. The design is clean and mobile-friendly, with a focus on usability for smartphone users. This project helped me explore custom responsive design with Tailwind, as well as practice API integration, user input handling, and presenting dynamic results from a third-party data source.",
    image: Recipy,
    demo: "https://nacs-recipy.netlify.app",
  },
];

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-900 text-white py-12 px-4 md:px-16">
      <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
      {/* Intro paragraph */}
      <p className="text-center text-gray-300 max-w-3xl mx-auto mb-10">
        Before diving into React, I spent time learning HTML, CSS, JavaScript,
        and Bootstrap, and built several projects using them. However, since I
        am now focused on React development, the projects listed here highlight
        the work I've done using React and related technologies.
      </p>
      <div className="space-y-16">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full md:h-64 md:w-1/2 rounded-lg bg-teal-400 shadow-lg"
              />
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-gray-300">
                  <span className="block md:hidden">
                    {expandedIndex === index
                      ? project.description
                      : `${project.description.slice(0, 250)}... `}
                    {project.description.length > 250 && (
                      <button
                        onClick={() => handleToggle(index)}
                        className="text-teal-400 underline ml-1"
                      >
                        {expandedIndex === index ? "Show less" : "Read more"}
                      </button>
                    )}
                  </span>

                  {/* Full description for md and up */}
                  <span className="hidden md:max-h-44 md:overflow-y-auto md:block">
                    {project.description}
                  </span>
                </p>
                <button
                  onClick={() => window.open(project.demo, "_blank")}
                  className="mt-4 px-6 py-2 bg-teal-500 hover:bg-teal-600 rounded transition"
                >
                  View Project
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
