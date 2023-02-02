import React from 'react'
import './Card.css'

function Card(props) {

    
    return (
        <div className='menu-border'>
            <ol>
                <h1>{props.label}</h1>
                <div className='menu-spacing'>
                    {props.item.map(itemsList => <li>{itemsList}</li>)}
                </div>
            </ol>
        </div>
    )
}

export default Card