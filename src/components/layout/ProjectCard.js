import React from "react";
import project from "../../assets/fk-invest.png"
import soon from "../../assets/coming-soon.png"
import "./ProjectCard.css";

const ProjectCard = () => {

    return (
        <div className="card-container">
            <div className="card">
                <img src={project} alt="" />
                <h3>Project Cryptocurrency</h3>
                <div className="details">
                    <p>Developed a responsive web application using Coin Gecko API to access in real-time information and data about cryptocurrencies;</p>
                    <p>Designed a dynamic and interactive layout using HTML5, CSS3, JavaScript, React Js (React Router Dom, Hooks).</p>
                </div>
                <div className="buttons">
                    <a href="https://fk-invest.vercel.app/" target="_blank" rel="noreferrer" className="btn">View</a>
                    <a href="https://github.com/fabiolakethelin/fk-invest" target="_blank" rel="noreferrer" className="btn">Source</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard