import React from "react";
import Intro from '../../assets/intro.jpg'
import LinkButton from './LinkButton'
import { Mask, Content } from './Hero.style.js'

const Hero = () => {
    return (
        <div>
            <Mask>
                <img src={Intro} alt='' />
            </Mask>
            <Content>
                <p>HI, I'M <span>FABÍOLA KETHELIN</span></p>
                <h1>WEB DEVELOPER</h1>
                <div>
                    <LinkButton to='/project' text='Projects' className='transparent'/>
                    <LinkButton to='/contact' text='Contact'/>
                </div>
                
            </Content>
        </div>
    )
}

export default Hero