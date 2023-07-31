import React from "react";
import "../styles/Home.css";
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";


function Home(){
    return (
        <div className='home'>
                <h2 className='greeting'>Hello, I am Yanfang Chen.</h2>
                <div className='introduction'>
                    <p>A new computer science graudate with passion for learning, currently looking for a job.</p>
                    <a href='https://www.linkedin.com/in/yanfang--chen/' rel='noreferrer' target='_blank'><LinkedIn/></a>
                    <a href='https://github.com/yanfangchen209' rel='noreferrer' target='_blank'><GitHub/></a>
                </div>
            </div>
    )
}

export default Home;