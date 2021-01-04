import React from 'react';
import { Container, Box, Center } from '@chakra-ui/react';
import Todo from './Todo';

const TodoList = (props) => {
	//map through the todos
	const todos = props.tasks.map((todo, index) => {
		return <Todo content={todo} key={index} id={index} onDelete={props.onDelete} />;
	});
	return <div className="list-wrapper">{todos}</div>;
}
export default TodoList
