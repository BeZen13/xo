import React, { useState } from 'react'

const initState = {
    squares: Array(9).fill(null)
}

export default function Board(props){
   const [ fill, setFill ] = useState(initState)
    
}