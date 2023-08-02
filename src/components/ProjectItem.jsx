/*import React from "react";*/
import {useNavigate} from 'react-router-dom';

function ProjectItem(props){
    const navigate = useNavigate();
    let onProjectClick = ()=> navigate('/projects/' + props.id);
    return (
        <div className="projectItem" onClick={onProjectClick}>
            <div style={{backgroundImage:`URL(${props.image})`}} className="bgImage"/>
            <h1>{props.name}</h1>
        </div>
    );
}
export default ProjectItem;