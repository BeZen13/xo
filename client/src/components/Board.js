import React, { useState } from 'react'
import styled from 'styled-components'

const initState = {
    squares: Array(9).fill(null)
}

export default function Board(props){
   const [ fill, setFill ] = useState(initState)
    
}