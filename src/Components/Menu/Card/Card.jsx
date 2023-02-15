import React from 'react'
import './Card.css'

function Card(props) {

    
    return (
        <div>
            <ol>
                <div className='card-title'>
                    <h1>{props.label}</h1>
                    <h4 className='card-time'>{props.time ? props.time : ''}</h4>
                    <h2 className='card-front'>{props.extras ? props.extras : ''}</h2>
                </div>
                <div className='card-spacing'>
                    {props.item.map((item) => {
                        return (
                        [
                            <h3 key={item.id}>{item.id}. {item.Name}... {item.Price ? item.Price : `Sm. ${item.Small}`} {!item.Large ? '':`Lg. ${item.Large}`}</h3>,
                            <h4 key={item.id}>{item.Description ?  item.Description : ''}</h4>
                        ]
                        )
                    })}
                </div>
            </ol>
        </div>
    )
}

export default Card