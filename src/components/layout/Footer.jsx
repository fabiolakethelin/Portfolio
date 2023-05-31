import React from "react";
import { Footer_Container } from './Footer.style.js';
import { FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa";

const Footer = () => {
    return (
        <Footer_Container>
            <span className="bar"></span>
            <a 
              href="https://github.com/fabiolakethelin"
              target='_blank'
              rel="noreferrer">
                <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/fabiolakethelin"
              target='_blank'
              rel="noreferrer">
                <FaLinkedin />
            </a>
            <a
              href="https://instagram.com/fabiola_kethelin?igshid=ZDdkNTZiNTM="
              target='_blank'
              rel="noreferrer">
                <FaInstagram />
            </a>
        </Footer_Container>
    );
};

export default Footer