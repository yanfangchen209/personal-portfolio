import React from "react";
import {Link} from "react-router-dom";
function Menu(){
    return (
        <div className="menu">
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/about">About</Link>
            </div>


        </div>
    )
}

export default Menu;