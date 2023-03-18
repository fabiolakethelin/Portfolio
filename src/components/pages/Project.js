import React from "react"
import ProjectCard from "../layout/ProjectCard"
import "./Project.css"

const Project = () => {
    return (
        <div className="project-container">
            <div className="head">
                <h2>PROJECTS</h2>
                <p>Passion mixed with creativity</p>
                <ProjectCard />
            </div>
        </div>
    )
}

export default Project