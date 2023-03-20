import React from "react";
import "./Input.css"

const Input = (props) => {
    return (
      <div>
          <input
            type={props.type}
            id={props.id}
            placeholder={props.placeholder}
            onChange={props.handleOnChange}
            value={props.value}
            required
          />
        </div>
    )
}

export default Input