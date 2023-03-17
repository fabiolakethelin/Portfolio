import React from "react";
import { FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa"
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="social">
                <span className="bar"></span>
                <a href="https://github.com/fabiolakethelin"
                target='_blank' rel="noreferrer"><FaGithub /></a>
                <a href="https://linkedin.com/in/fabiolakethelin"
                target='_blank' rel="noreferrer"><FaLinkedin /></a>
                <a href="https://instagram.com/fabiola_kethelin?igshid=ZDdkNTZiNTM="
                target='_blank'><FaInstagram /></a>
            </div>
        </div>
    )
}

export default Footer