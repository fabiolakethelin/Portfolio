import React from "react";
import { Link } from "react-router-dom";
import './LinkButton.css'

const LinkButton = ({to, text, className}) => {
    return (
        <Link to={to} className={className}>
            {text}
        </Link>
    )
}

export default LinkButton