import React from "react";
import "./myprojects.css";
import projects from "../../data/projects";
import Project from "../Project";

const Myprojects = () => {
  return (
    <section id="myprojects">
      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            imageSrc={project.imageSrc}
            description={project.description}
            techstack={project.techStack}
            githubLink={project.githubLink}
            websiteLink={project.websiteLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Myprojects;
