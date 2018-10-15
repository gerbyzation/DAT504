import React, { Component } from 'react';

class TodoApp extends Component {
  state = {
    inputValue: '',
    todos: [],
  }

  onType = (event) => {
    this.setState({
      inputValue: event.target.value,
    })
  }

  saveToList = () => {
    this.setState({
      todos: [...this.state.todos, this.state.inputValue],
      inputValue: '',
    })
  }

  render () {
    return (
      <div>
        <input
          className='todo-input'
          type='text'
          onChange={this.onType}
          value={this.state.inputValue}
        />
        <Button onClick={this.saveToList} text='save to list' />

        <Button onClick={() => console.log('pressed')} text='second button' />
        <TodoList items={this.state.todos} />
      </div>
    )
  }
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const TodoList = (props) => {
  const listItems = props.items.map((item) => {
    return <li>{item}</li>
  })
  return (
    <ol>
      {listItems}
    </ol>
  )
}

export default TodoApp;
