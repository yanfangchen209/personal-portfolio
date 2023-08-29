import React from "react";
import Grid from "@mui/material/Grid";
import profile from "../assets/profile.jpg";
import "../styles/About.css";


function About(){
    return (
    <div>
        <Grid container spacing={2} sx={{minHeight:400}}>
            <Grid item xs={5}>
                <div className='container'>
                    <img src={profile} alt="my picture" id="profileImg"/>
                </div>
                <div className='container selfintroduction'>
                    <h3>About me</h3>
                    <p> I am a dedicated software engineer with a Master's 
                        degree in Computer Science. My passion lies in front-end development, 
                        full-stack web development and data analysis. With expertise spanning a diverse range of 
                        technologies and methodologies, I am enthusiastic about joining a dynamic 
                        team where I can leverage my skills and commitment to create impactful and innovative solutions.
                    </p>
                    <h3>Availability</h3>
                    <ul className='skillsets'>
                        <li>
                            Open to both in-person and remote work arrangements.
                        </li>
                        <li>
                            Authorized to work in the United States, no sponsorship required presently or in future.
                        </li>
                    </ul>    
                </div>
            </Grid>
            <Grid item xs={7}>
                <div className='container'>
 
                    <h3>Technical Expertise</h3>
                    <ul className='skillsets'>
                        <li>
                            Experienced in back-end development utilizing Spring Boot, Java, Python and SQL databases, including Oracle, MS Server SQL, and MongoDB.
                        </li>
                        <li>
                            Skilled in modern front-end libraries and frameworks like React for building engaging user interfaces.
                        </li>
                        <li>
                            Restful API Development: Practiced in designing and building RESTful APIs.
                        </li>
                        <li>
                            Proficient in creating dynamic and responsive web applications using Servlets, 
                            HTML, CSS, and JavaScript.
                        </li>
                        <li>
                            Object-Oriented Programming (OOP): experienced at applying OOP principles to develop modular and maintainable code.
                        </li>
                        <li>
                            Linux Environment: Experienced in working within a Linux environment, leveraging command-line tools and shell scripting.
                        </li>
                        <li>
                            Node.js: Usage of Node.js for manage react projects.
                        </li>
                        <li>
                            Amazon Web Services (AWS): Experienced in setting up and configuring virtual machine instances on AWS, managing Elastic IP addresses to provide a static public IP for EC2 instances, Skilled in setting up and configuring NGINX web server on AWS instances, configuring DNS settings, deploying and securing applications on AWS.
                        </li>
                        <li>
                            Knowledgeable in project management tools such as Maven and Gradle. Skilled in utilizing Jira for efficient project management, tracking tasks, issues, and agile workflows to enhance team collaboration and project execution.
                        </li>
                        <li>
                            Practiced in Scrum/Agile software engineering methodologies, fostering collaboration and delivering high-quality results.
                        </li>
                        <li>
                            Proficient with Git version control, ensuring code integrity and enabling seamless collaboration within development teams.
                        </li>
                    </ul>  
                    <h3>Soft Skills</h3>
                    <ul className='skillsets'>
                        <li>
                            Effective communication skills, enabling clear interaction with team members. work harmoniously with others, contribute positively to group dynamics, and collaborate toward achieving common goals.
                        </li>
                        <li>
                            Possess a strong passion for learning and staying updated with the latest advancements in the tech industry.
                        </li>
                    </ul>
                      
 
                </div>
            </Grid>
        </Grid>
    </div>
    
    
    
    )
}

export default About;