import React from 'react'
import ImageSlider from './ImageSlider/ImageSlider';
import { SliderData } from './ImageSlider/SliderData';
import './Main.css'

function Main() {
    return (
        <div className='front-background' >
            <div>
                <h1 className='front-page-title'>Welcome to China Buffet</h1>
                <h1 className='front-page-title'>Dillon, SC</h1>
            </div>
            <div className='front-page-background'>
                <ImageSlider slides={SliderData}/>
            </div>
        </div>
    )
}

export default Main;