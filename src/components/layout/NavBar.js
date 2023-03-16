import React, { useState } from "react"
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import illustration from '../../img/illustration.png'
import './NavBar.css'

const NavBar = () => {

    const [open, setOpen] = useState(false)
    const handleClick = () => setOpen(!open)

    return (
        <nav className='header'>
            <Link to='/'><img src={illustration} alt="" /></Link>
            <ul className={open ? 'list active' : 'list'} onClick={handleClick}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/project'>Project</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
            <div className='burger' onClick={handleClick}>
                    {open ? <FaTimes /> : <FaBars />}
            </div>
            <div className={open ? 'closemenu' : 'closemenu desactived'} onClick={handleClick}/>
        </nav>
    )
}

export default NavBar