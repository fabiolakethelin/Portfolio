import React from "react";
import { Input_Container } from "./Input.style.js"

const Input = (props) => {
    return (
      <Input_Container>
          <input
            type={props.type}
            id={props.id}
            placeholder={props.placeholder}
            onChange={props.handleOnChange}
            value={props.value}
            required
          />
        </Input_Container>
    )
}

export default Input