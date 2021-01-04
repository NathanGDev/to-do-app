import React from 'react'
import { Container, Box, Center } from "@chakra-ui/react"

const Todo = (props) => {
  return(<div className="list-item">{props.content}
  <button class="delete is-pulled-right" onClick={()=> {props.onDelete(props.id)}}>x</button>
  </div>
  )
}

export default Todo
