import React from "react";
import './Button.css'

const Button = ({type, text}) => {
    return (
        <div>
            <button className='btn' type={type}>
                {text}
            </button>
        </div>
    )
}

export default Button