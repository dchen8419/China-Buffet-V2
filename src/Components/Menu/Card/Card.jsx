import React from 'react'
import './Card.css'

function Card(props) {

    
    return (
        <div>
            <div className='card-label'>
                <h1>{props.label}</h1>
                <h4 className='card-time'>{props.time ? props.time : ''}</h4>
                <h2 className='card-extra'>{props.extras ? props.extras : ''}</h2>
            </div>
            <ol className='card-spacing'>
                <div>
                    {props.item.map((item) => {
                        return (
                        [
                            <h3 key={item.id}>
                                {item.id}. {item.Name}... {item.Price ? item.Price : `Sm. ${item.Small}`} {!item.Large ? '':`Lg. ${item.Large}`}
                            </h3>,
                            <h4 key={item.id}>
                                {item.Description ?  item.Description : ''}
                            </h4>
                        ]
                        )
                    })}
                </div>
            </ol>
        </div>
    )
}

export default Card