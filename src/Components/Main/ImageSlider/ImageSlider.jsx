import React, {useState} from 'react'
import { SliderData } from './SliderData'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import './ImageSlider.css'


const ImageSlider = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <div className='front-page-background'>
            <div>
                <h1 className='page-name'>Welcome to China Buffet</h1>
                <h1 className='page-name'>Dillon, SC</h1>
            </div>
                <div>
                    <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
                </div>
                <div>
                    <FaArrowAltCircleRight className="right-arrow"  onClick={nextSlide}/>
                </div>
            <section className='slider'>

                
                    {SliderData.map((slide, index) => {
                        return (
                            <div className={index === current ? 'slide active' : slide} key={index}>
                                {index === current && (
                                    <img src={slide.image} alt="food" className='slider-image'/>
                                )}
                            </div>
                )
            })}
            </section>
        </div>
        
    )
}

export default ImageSlider