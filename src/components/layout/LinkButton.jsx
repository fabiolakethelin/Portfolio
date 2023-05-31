import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./LinkButton.style.js";

const LinkButton = ({to, text, className, target}) => {
    return (
        <Button >
            <Link to={to} className={className} target={target}>
                {text}
            </Link>
        </Button>
    )
}

export default LinkButton