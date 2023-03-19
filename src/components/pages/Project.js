import React from "react"
import ProjectCard from "../layout/ProjectCard"
import project1 from "../../assets/fk-invest.png"
import soon from "../../assets/coming-soon.png"
import "./Project.css"

const Project = () => {
    return (
        <div className="project-container">
            <div className="head">
                <h2>PROJECTS</h2>
                <p>Passion mixed with creativity</p>
            </div>
            <div className="project-card">
                <ProjectCard
                  src={project1}
                  tittle="Project Cryptocurrency"
                  text1="Developed a responsive web application using Coin Gecko API to access in real-time information and data about cryptocurrencies;"
                  text2="Designed a dynamic and interactive layout using HTML5, CSS3, JavaScript, React Js (React Router Dom, Hooks)."
                  view="https://fk-invest.vercel.app/"
                  source="https://github.com/fabiolakethelin/fk-invest"
                />
                <ProjectCard src={soon} />
                <ProjectCard src={soon} />
            </div>
        </div>
    )
}

export default Project