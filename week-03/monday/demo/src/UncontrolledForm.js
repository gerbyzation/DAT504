import React, { Component } from 'react';

class Greeting extends Component {
  state = {
    name: undefined,
  }
  input = React.createRef();

  greet = (event) => {
    this.setState({
      name: this.input.current.value
    })
  }

  render () {
    if (this.state.name) {
      return <h1>Hi {this.state.name}, how are you?</h1>
    } else {
      return (
        <div>
          <input type='text' ref={this.input} placeholder="What's your name" />
          <button type='submit' onClick={this.greet}>Send</button>
        </div>
      )
    }
  }
}

export default Greeting;