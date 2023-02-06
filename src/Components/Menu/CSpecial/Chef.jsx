import React from 'react'

function Chef(props) {

    return (
        <div>
            <h1 className='chef-special-border'>Chef's Specials</h1>
            <h3>(w. White Rice)</h3>
            <div >
                {props.item.map((element) => {
                    return (
                        [
                            <h3 key={element.id}>{element.MenuNumber}. {element.Name}</h3>, 
                            <h4 key={element.id}>{element.Description}</h4>
                        ]
                    )
                })}
            </div>
        </div>
    )
}

export default Chef