import React, { useState } from "react";
import ProjectsData from "../data/ProjectsData";

function ProjectStats() {
  const [projects, setProjects] = useState(ProjectsData);

  var projectCount = projects.length;
  var projectCompleted = projects.filter((project) => project.isCompleted == true).length;
  var projectAward = projects.filter((project)=> project.isAwarded == true).length; 
    

  return (
    <div className="projectStats-Container">
      <div className="stats-col1 stats-col">
        <img src="https://i.hizliresim.com/ejy98da.png" />
        <div className="stats-desc">
          <h1>DESIGN DRAWING</h1>
          <h2>{projectCount}</h2>
        </div>
      </div>
      <div className="stats-col2 stats-col">
        <img src="https://i.hizliresim.com/5dz50ki.png" />
        <div className="stats-desc">
          <h1>PROJECT COMPLETED</h1>
          <h2>{projectCompleted}</h2>
        </div>
      </div>
      <div className="stats-col3 stats-col">
        <img src="https://i.hizliresim.com/tjmb4k2.png" />
        <div className="stats-desc">
          <h1>DESIGN AWARD</h1>
          <h2>{projectAward}</h2>
        </div>
      </div>
      <div className="stats-col4 stats-col">
        <img src="https://i.hizliresim.com/o4lkw1b.png" />
        <div className="stats-desc">
          <h1>PROJECT RUNNING</h1>
          <h2>62</h2>
        </div>
      </div>
    </div>
  );
}

export default ProjectStats;
