import React from 'react'
import Title from './Components/Title';
import SubmitForm from './Components/SubmitForm';
import TodoList from './Components/TodoList'
import "./App.css"


class TodoApp extends React.Component {
  state = {
    tasks: ["DELETE THESE", "TO DOS AND MAKE YOUR OWN"]
  }
handleDelete = (index) => {
  const newArr = [...this.state.tasks];
  newArr.splice(index, 1);
  this.setState({tasks: newArr})
}
handleSubmit = task => {
  this.setState({tasks: [...this.state.tasks, task]})
}
  render(){
    return(
      <div className="wrapper">
        <div className="card frame">
          <Title numToDos={this.state.tasks.length}/>
          <TodoList tasks={this.state.tasks} onDelete={this.handleDelete}/>
          <SubmitForm onFormSubmit={this.handleSubmit}/>
        </div>
      </div>
    )
  }
}

export default TodoApp
