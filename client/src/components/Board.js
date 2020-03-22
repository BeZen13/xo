import React, { useState } from 'react'
import styled from 'styled-components'

const initState = {
    squares: Array(9).fill(null)
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
    


export default function Board(props){
   const [ fill, setFill ] = useState(initState)
    
}