import React from "react";
import ProjectItem from "../components/ProjectItem.jsx";
import ProjectData from "../data/projectData.js";
import "../styles/Projects.css";
import "../styles/ProjectItem.css";

function Projects(){
    const projects = ProjectData.map(
        (project) => <ProjectItem key={project.id} id={project.id} name={project.name} image={project.image} /> 
    );
    return(
        <div className="projects">
            <div className="projectList">
                {projects}
            </div>
        </div> 
    );
    
}

export default Projects;