import React from "react";
import "./ProjectCard.css";

const ProjectCard = (props) => {

    return (
        <div className="card-container">
            <div className="card">
                <img src={props.src} alt="" />
                <h3>{props.tittle}</h3>
                <div className="details">
                    <p>{props.text1}</p>
                    <p>{props.text2}</p>
                    <div className="buttons">
                        <a href={props.view} target="_blank" rel="noreferrer" className="btn">View</a>
                        <a href={props.source} target="_blank" rel="noreferrer" className="btn">Source</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard