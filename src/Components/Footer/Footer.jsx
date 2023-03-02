import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <div className='footer-container'>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to="/contact">Careers</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Contact Us</h2>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/contact'>Support</Link>
                </div>
            </div>
        </div>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                </div>
                <small className='website-rights'>David Chen &copy;{new Date().getFullYear()} Luna Media LLC | All right reserved | Terms and Conditions | Privacy</small>
            </div>
        </section>
    </div>
    )
}

// export const Footer = () => {
//     return (
//         <div className='footer-container'>
//             <div>
//                 <h1>Something</h1>
//                 <ul>
//                     <li>One</li>
//                     <li>Two</li>
//                 </ul>
//             </div>
//             <div>
//                 <h1>Something else</h1>
//                 <ul>
//                     <li>three</li>
//                     <li>four</li>
//                 </ul>
//             </div>
//             <div>
//                 <hr />
//                 <p>
//                     David Chen &copy;{new Date().getFullYear()} Luna Media LLC | All right reserved | Terms and Conditions | Privacy
//                 </p>
//             </div>
//         </div>
//     )
// }