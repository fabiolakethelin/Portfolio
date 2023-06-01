import React from "react";
import {CardContainer, Card, Details} from "./ProjectCard.style.js";
import {Button} from './LinkButton.style.js'

const ProjectCard = (props) => {

    return (
        <CardContainer>
            <Card>
                <img src={props.src} alt="" />
                <h3>{props.tittle}</h3>
                <Details>
                    <p>{props.text1}</p>
                    <p>{props.text2}</p>
                    <Button className="flex">
                        <a href={props.view} target="_blank" rel="noreferrer" className="btn">View</a>
                        <a href={props.source} target="_blank" rel="noreferrer" className="btn">Source</a>
                    </Button>
                </Details>
            </Card>
        </CardContainer>
    );
};

export default ProjectCard