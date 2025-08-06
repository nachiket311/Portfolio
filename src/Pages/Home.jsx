import React from "react";
import Carousel from "../component/Carousel";
import AboutforHome from "../component/AboutforHome";
import Skill from "../component/Skill";
import ProjectsforHome from "../component/ProjectsforHome";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Carousel />
      <AboutforHome />
      <Skill />
      <ProjectsforHome />
    </>
  );
};

export default Home;
