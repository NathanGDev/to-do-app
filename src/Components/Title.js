import { Box } from '@chakra-ui/react'
import React from 'react'

const Title = (props) => {
  return (
    <div className="card-header">
        <h1 className="card-header-title header">To-do {props.numToDos}</h1>
    </div>
  )
}

export default Title
