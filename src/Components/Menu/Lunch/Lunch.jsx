import React from 'react'

function Lunch(props) {
    return (
        <div>
            <h1>Lunch Special</h1>
            <h3>(11:00am to 4:00pm)</h3>
            <h2>Served with Egg Roll & Pork Fried Rice</h2>
            <div>
                {props.item.map((element) => {
                    return (
                        [
                            <h3 key={element.id}>{element.LunchNumber}. {element.LunchCombo}</h3>
                        ]
                    )
                })}
            </div>
        </div>
    )
}

export default Lunch