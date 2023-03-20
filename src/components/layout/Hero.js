import React from "react";
import Intro from '../../assets/intro.jpg'
import LinkButton from './LinkButton'
import './Hero.css'

const Hero = () => {
    return (
        <div>
            <div className="mask">
                <img src={Intro} alt='' />
            </div>
            <div className="content">
                <p>HI, I'M <span>FABÍOLA KETHELIN</span></p>
                <h1>FRONT END DEVELOPER</h1>
                <div>
                    <LinkButton to='/project' text='Projects' className='btn transparent'/>
                    <LinkButton to='/contact' text='Contact' className='btn'/>
                </div>
            </div>
        </div>
    )
}

export default Hero