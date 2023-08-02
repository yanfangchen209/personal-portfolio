import React from 'react';
import '../styles/ProjectDetail.css';
import {useParams} from 'react-router-dom';
import ProjectList from '../data/projectData';
import GitHub from "@mui/icons-material/GitHub";

function ProjectDetail(){
    let {id} = useParams();
    const project = ProjectList.find(item => item.id == id);

    if(project){
        return(
            <div className="project">
                <h1 className='name'>{project.name}</h1>
                <img src={project.image} />
                <p>
                    <b>Description: </b>{project.description}
                </p>
                <p>
                    <b>Skills: </b>{project.skill}
                </p>
                <div><span>App url: {project.websiteUrl ? project.websiteUrl : "Deploy in progess"}</span>
                </div>
            </div>
        )
    }
}



export  default ProjectDetail;