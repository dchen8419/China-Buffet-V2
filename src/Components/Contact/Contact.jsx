import React from 'react'
import GreatWall from '../../Assets/Greatwall.png'
import './Contact.css'

function Contact() {
    return (
        <div>
            <div className='back-ground'>
                <img alt="greatwall" className='greatwall-image' src={GreatWall}/>
            </div>
            <div className='container'>
                <div>
                    <h1 >Contact</h1>
                    <h3>Address</h3>
                    <p>208 Hwy 301 N</p>
                    <p>Dillon, SC 29536</p>
                    <h3>Contact for Hiring</h3>
                    <p>1 (843) - 841 - 3188</p>
                </div>
                <div>
                    <h1>Open 7 days</h1>
                    <p>Mon. - Thurs. : 11:00 am - 9:30 pm</p>
                    <p>Fri. & Sat. : 11:00 am - 10:00 pm</p>
                    <p>Sunday: 11:30 am - 9:00 pm</p>
                    <h3>For Carry Out Orders</h3>
                    <p>1 (843) - 841 - 3188</p>
                </div>
                <div>
                    <h1>New York Style</h1>
                    <h3>Lunch Buffet</h3>
                    <p>11:00 am - 4:00 pm</p>
                    <h3>Dinner Buffet</h3>
                    <p>4:00 pm - close</p>
                </div>
            </div>
        </div>
    )
}

export default Contact