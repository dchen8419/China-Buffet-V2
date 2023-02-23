import React from 'react'
import './About.css'
import templeofheaven from '../../Assets/TempleOfHeaven.png'

function About() {
    return (
        <div className='about-background'>
            <div className='about'>
                <h1 className='about-us'>About Us</h1>
            <div>
                <img alt="templeofheaven" src={templeofheaven} className="temple-of-heave-image"/>
            </div>
                <h3 className='about-spacing'>
                China Buffet is locally owned and operated by a collective group to bring the best Chinese food to Dillon, South Carolina. 
                With over 20 years of experience, China Buffet thrives to serve its community and bring the freshest ingrediants to the table.
                
                </h3>
            </div>
        </div>
    )
}

export default About