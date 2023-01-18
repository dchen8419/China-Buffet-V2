import React from 'react'
import './Footer.css'

export const Footer = () => {
    return (
        <div className='footer-container'>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>About Us</h2>
                    <a href="http://localhost:3000/contact">Careers</a>
                </div>
                <div className='footer-link-items'>
                    <h2>Contact Us</h2>
                    <a href="http://localhost:3000/contact">Contact</a>
                    <a href="http://localhost:3000/contact">Support</a>
                </div>
            </div>
        </div>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                </div>
                <small className='website-rights'>David Chen © 2023</small>
                <div className='social-icons'>
                </div>
            </div>
        </section>
    </div>
    )
}