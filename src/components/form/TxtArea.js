import React from "react";
import "./TxtArea.css"

const TxtArea = (props) => {
    return (
        <textarea
            placeholder={props.placeholder}
            onChange={props.handleOnChange}
            value={props.value}
            required
        />
    )
}

export default TxtArea