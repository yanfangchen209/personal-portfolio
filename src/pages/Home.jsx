import React from "react";
import "../styles/Home.css";
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";


function Home(){
    return (
        <div className='home'>
                <h2 className='greeting'>Hello, I am Yanfang Chen.</h2>
                <div className='introduction'>
                    <p>I hold a master's degree in computer science and am actively pursuing positions 
                        as a software engineer.
                    </p> 
                    <p>My areas of particular interests are front-end development and full-stack web
                        development.
                    </p>
                    <a href='https://www.linkedin.com/in/yanfang--chen/' rel='noreferrer' target='_blank'><LinkedIn/></a>
                    <a href='https://github.com/yanfangchen209' rel='noreferrer' target='_blank'><GitHub/></a>
                </div>
            </div>
    )
}

export default Home;