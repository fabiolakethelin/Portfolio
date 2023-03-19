import React from "react"
import teste from '../../assets/teste.png'
import "./About.css"

const About = () => {
    return (
        <div className="about-container">
            <div className="left">
                <h2>I am Fabíola Kethelin</h2>
                <h3>A <span>Front-End Developer</span></h3>
                <p>My passion for web development started in high school, so I started studying information systems to turn that passion into a career. I love the challenge of taking a design from concept to reality or finding creative solutions to complex problems.</p>
                <p>I'm always looking for new challenges and opportunities to learn. I'm a big believer in the power of collaboration and communication, and I enjoy working closely with designers and other developers to create the best possible product.</p>
            </div>
            <div className="right">
                <div className="img-container">
                    <img src={teste} alt=''/>
                </div>
            </div>
        </div>
    )
}

export default About