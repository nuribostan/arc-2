import React, { useState, useEffect } from "react";
import BackgroundTitle from "../shared/BackgroundTitle";
import ImageCard from "../shared/ImageCard";
import projectData from "../data/ProjectsData";
import Button from "../shared/Button";

function Projects() {
  const [projects, setProjects] = useState(projectData);



  useEffect(() => {
    const projectImages = document.querySelectorAll(".projectImage");

    projectImages.forEach((projectImage) => {
      projectImage.addEventListener("mouseover", () => {
        projectImage.childNodes[1].classList.add("desc-active");
      });
      projectImage.addEventListener("mouseout", () => {
        projectImage.childNodes[1].classList.remove("desc-active");
      });
    });
  }, []);


  
  return (
    <div className="project-Container">
      <BackgroundTitle bgTitle="Projects" fontSize={"30"} left={10} top={0} />
      <div className="projectTitle">
        <h1>Project Gallery</h1>
        <div className="project-desc">
          <p>
            We will continue to grow and evolve Mrittik for the betterment of
            our clients and our people. Vision includes the continual expansion.
          </p>
          <p>
            We will continue to grow and evolve Mrittik for the betterment of
            our clients and our people. Vision includes the continual expansion.
          </p>
        </div>
      </div>

      <div className="projectImages">
        {projects.map((project) => {
          return (
            <div className={"project-grid grid-span-col-"+ project.id }>
              <div className="projectImage">
                <img src={project.image} alt="" />
                <ImageCard
                  title={project.title}
                  desc={project.description}
                  buttonText={"Read More"}
                  className={"project-image-desc"}
                />
              </div>
            </div>
          );
        })}
      </div>

      <Button text={"More project"} width={"100"} color={"#a6a182"}/>
    </div>
  );
}

export default Projects;
