import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'



function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    },[]);

    window.addEventListener('resize', showButton);

    return (
        <nav>
            <div onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className='nav-links'>
                <Link className='nav-style' to="/" onClick={closeMobileMenu}>
                    <li>Home</li>
                </Link>
                <Link className='nav-style' to="/menu" onClick={closeMobileMenu}>
                    <li>Menu</li>
                </Link>
                <Link className='nav-style' to="/about" onClick={closeMobileMenu}>
                    <li>About</li>
                </Link>
                <Link className='nav-style' to="/contact" onClick={closeMobileMenu}>
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar