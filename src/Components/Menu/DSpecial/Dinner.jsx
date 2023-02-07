import React from 'react'

function Dinner(props) {
    return (
        <div>
            <h1>Dinner</h1>
            <h2>Combination Platters</h2>
            <h3>(served with Egg Roll & Pork Fried Rice)</h3>
            <div>
                {props.item.map((element) => {
                    return (
                        [
                            <h3 key={element.id}>{element.DinnerNumber}. {element.DinnerCombo}</h3>,
                        ]
                    )
                })}
            </div>
        </div>
    )
}

export default Dinner