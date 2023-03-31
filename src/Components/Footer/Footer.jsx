import React from 'react'
import './Footer.css'

export const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <a href="https://goo.gl/maps/NpxminUJ5zycHaWL6">
                            <h2>Address</h2>
                            <p>208 US-301</p>
                            <p>Dillon, SC 29536</p>
                        </a>
                    </div>
                    <div className='footer-link-items'>
                        <a href="tel:843-841-3188">
                            <h2>Contact Us</h2>
                            <p>(843) 841-3188</p>
                        </a>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                </div>
                    <small className='website-rights'>David Chen &copy;{new Date().getFullYear()} Luna Media LLC</small>
                </div>
            </section>
        </div>
    )
}
