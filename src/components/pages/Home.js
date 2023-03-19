import React from "react"
import Hero from "../layout/Hero"
import About from "./About"
import Project from "./Project"
import Contact from "./Contact"

const Home = () => {
    return (
        <div>
            <Hero />
            <Project />
            <About />
            <Contact />
        </div>
    )
}

export default Home