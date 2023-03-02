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

    // return (
    //     <nav>
    //         <div onClick={handleClick}>
    //             <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
    //         </div>
    //         <ul className='nav-links'>
    //             <Link className='nav-style' to="/" onClick={closeMobileMenu}>
    //                 <li>Home</li>
    //             </Link>
    //             <Link className='nav-style' to="/menu" onClick={closeMobileMenu}>
    //                 <li>Menu</li>
    //             </Link>
    //             <Link className='nav-style' to="/about" onClick={closeMobileMenu}>
    //                 <li>About</li>
    //             </Link>
    //             <Link className='nav-style' to="/contact" onClick={closeMobileMenu}>
    //                 <li>Contact</li>
    //             </Link>
    //         </ul>
    //         <div>
    //         {/* {button && <Button buttonStyle='btn--outline'></Button>} */}
    //         </div>
    //     </nav>
    // )

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        China Buffet 
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/menu' className='nav-links' onClick={closeMobileMenu}>
                                Menu
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    {button}
                </div>
            </nav>  
        </>
        )
}

export default Navbar