import React from 'react'
import GreatWall from '../../Assets/Greatwall.png'

function Contact() {
    return (
        <div>
            <div className='contact'>
                <img alt="greatwall" src={GreatWall}/>
            </div>
            <h1 >Contact</h1>
            <h2>Address</h2>
            <p>208 Hwy 301 N</p>
            <p>Dillon, SC 29536</p>
            <h2>Contact and Carry out Order</h2>
            <p>1 (843) - 841 - 3188</p>
            <h2>New York Style</h2>
            <h3>Lunch Buffet</h3>
            <p>11:00 am - 4:00 pm</p>
            <h3>Lunch Buffet</h3>
            <p>4:00 pm - close</p>
            <h2>Open 7 days</h2>
            <p>Mon. - Thurs. : 11:00 am - 9:30 pm</p>
            <p>Fri. & Sat. : 11:00 am - 10:00 pm</p>
            <p>Sunday: 11:30 am - 9:00 pm</p>
    </div>
    )
}

export default Contact