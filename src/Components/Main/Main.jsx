import React from 'react'
import { Footer } from '../Footer/Footer';
import ImageSlider from './ImageSlider/ImageSlider';
import { SliderData } from './ImageSlider/SliderData';
import './Main.css'

function Main() {
    return (
        <div>
            <div className='front-page-background'>
                <ImageSlider slides={SliderData}/>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Main;