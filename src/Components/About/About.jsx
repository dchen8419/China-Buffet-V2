import React from 'react'
import './About.css'
import templeofheaven from '../../Assets/TempleOfHeaven.png'

function About() {
    return (
        <div className='about'>
            <h1 className='about-us'>About Us</h1>
            <div>
                <img alt="templeofheaven" src={templeofheaven} className="temple-of-heave-image"/>
            </div>
            <h3 className='about-spacing'>
                Locally owned and operated. Owner, Niao Huan Chen, 
                immigrated to the United States back in the 1980s with a dream of 
                owning his own business. He started as a waiter and chef in Chinatown, NYC then moved to Lumberton, NC in 1998. There he opened his first business,
                Lung Wah Chinese Restaurant, then it evolved into Soho Bistro. After 15 years of owning his business in Lumberton,
                he moved to Dillion, SC to venture into China Buffet continuing to perfect his skills 
                and talent as a Chef.
            </h3>
        </div>
    )
}

export default About