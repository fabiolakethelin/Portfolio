import React from "react"
import portrait from '../../assets/portrait.jpg'
import { About_Container, Intro, Img_Container } from "./About.style.js"

const About = () => {
    return (
        <About_Container>
            <Intro>
                <h2>I am Fabíola Kethelin</h2>
                <h3>A <span>Web Developer</span></h3>
                <p>
                    My passion for web development started in high school, so I started studying information systems to turn that passion into a career. I love the challenge of taking a design from concept to reality or finding creative solutions to complex problems.
                </p>
                <p>
                    I'm always looking for new challenges and opportunities to learn. I'm a big believer in the power of collaboration and communication, and I enjoy working closely with designers and other developers to create the best possible product.
                </p>
            </Intro>
            <Img_Container>
                <div className="portrait">
                    <img src={portrait} alt=''/>
                </div>
            </Img_Container>
        </About_Container>
    )
}

export default About