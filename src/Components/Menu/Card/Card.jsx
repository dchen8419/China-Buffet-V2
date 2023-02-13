import React from 'react'
import './Card.css'

function Card(props) {

    
    return (
        <div className='menu-border'>
            <ol>
                <h1>{props.label}</h1>
                <h4>{props.time ? props.time : ''}</h4>
                <h4>{props.extras ? props.extras : ''}</h4>
                <div className='menu-spacing'>
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