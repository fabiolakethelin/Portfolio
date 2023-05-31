import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import illustration from '../../assets/illustration.png';
import { Header, NavIcon, NavContent, CloseMenu } from './NavBar.style.js';
import {Button} from './LinkButton.style';
import LinkButton from "./LinkButton";

const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleClick = () => setIsMenuOpen(!isMenuOpen);
  
    return (
        <Header>
            <div>
                <Link to='/'><img src={illustration} alt="" /></Link>
            </div>

            <NavContent open={isMenuOpen} onClick={handleClick}>
                <div className='list'>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/project'>Project</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </NavContent>

            <LinkButton to="/files/FabiolaCv.pdf" target="_blank" text='Download CV' />

            <NavIcon open={isMenuOpen} onClick={handleClick}>
                {isMenuOpen ? <FaTimes /> : <FaBars />}
            </NavIcon>

            <CloseMenu open={isMenuOpen} onClick={handleClick}/>
        </Header>
    );
};

export default NavBar