import React from "react";
import { TxtArea } from "./TextArea.style.js"

const TextArea = (props) => {
    return (
        <TxtArea
            placeholder={props.placeholder}
            onChange={props.handleOnChange}
            value={props.value}
            required
        />
    )
}

export default TextArea