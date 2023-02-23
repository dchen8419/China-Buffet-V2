import React from 'react'
import ImageSlider from './ImageSlider/ImageSlider';
import { SliderData } from './ImageSlider/SliderData';
import './Main.css'

function Main() {
    return (
        <div className='front-background '>
            <div className='front-container'>
                <ul>
                    <h1>Welcome to China Buffet</h1>
                    <h3>Dillon, SC</h3>
                </ul>
            </div>
            <div>
                <ImageSlider slides={SliderData}/>
            </div>
        </div>
    )
}

export default Main;