import React, { useState } from 'react'

const initState = {
    value: null
}

export default function Squares(props){
   const [ square, setSquare ] = useState(initState)

    return(
        <button className="square" onClick={() => 
            setSquare(...prevSquare => ({
                ...prevSquare,
                value: "X"
            }))
        }
        ></button>
    )
}
