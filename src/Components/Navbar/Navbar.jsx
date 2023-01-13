import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'



function Navbar() {
    return (
        <nav>
            <ul className='nav-links'>
                <Link className='nav-style' to="/">
                    <li>Home</li>
                </Link>
                <Link className='nav-style' to="/menu">
                    <li>Menu</li>
                </Link>
                <Link className='nav-style' to="/about">
                    <li>About</li>
                </Link>
                <Link className='nav-style' to="/contact">
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar