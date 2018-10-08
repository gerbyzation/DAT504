import React, { Component } from 'react';

class TodoApp extends Component {
  state = {
    todos: [
      { task: 'read eloquent javascript', done: true },
      { task: 'extend addressbook API with businesses', done: false },
      { task: 'come up with idea for project', done: false }
    ]
  }

  render () {
    return <TodoList todos={this.state.todos} />
  }
}

const TodoList = (props) => {
  const tasks = props.todos.map(item => <TodoItem task={item.task} done={item.done} />);
  return (
    <ul>
      {tasks}
    </ul>
  )
}

const TodoItem = (props) => {
  return (
    <li>
      <input type='checkbox' defaultChecked={props.done} /> {props.task}
    </li>
  );
}

export default TodoApp;
