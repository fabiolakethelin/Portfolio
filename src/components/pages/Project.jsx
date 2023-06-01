import React from "react"
import ProjectCard from "../layout/ProjectCard"
import project1 from "../../assets/vitalize.png"
import soon from "../../assets/coming-soon.png"
import { Header, ProjectCard_Container } from "./Project.style.js"

const Project = () => {
    return (
        <div>
            <Header>
                <h2>PROJECTS</h2>
                <p>Passion mixed with creativity</p>
            </Header>
            <ProjectCard_Container>
                <ProjectCard
                  src={project1}
                  tittle="Vitalize Platform"
                  text1="Vitalize is a fitness web application using React JS along with Vite to enhance the development process. Designed a dynamic and responsive design utilizing styled-components;"
                  text2="The application integrates with two APIs to provide its core functionality. The APIs are used to fetch exercise data, allowing users to explore a range of exercises categorized by body part, target area, or equipment. They also enable users to access healthy recipes by name or calories."
                  view="https://vitalize.vercel.app/"
                  source="https://github.com/fabiolakethelin/vitalize"
                />
                <ProjectCard src={soon} />
                <ProjectCard src={soon} />
            </ProjectCard_Container>
        </div>
    )
}

export default Project