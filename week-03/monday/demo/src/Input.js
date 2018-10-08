import React, { Component } from 'react';

class Input extends Component {
  state = {
    value: ''
  }

  onChange = (event) => {
    const newValue = event.target.value;
    if (newValue.length < 6) {
      console.log("More characters please!")
    }
    this.setState({
      value: newValue
    })
  }

  clearInput = () => {
    this.setState({
      value: ''
    })
  }

  render () {
    return (
      <div>
        <input
          type='text'
          placeholder='type here'
          onChange={this.onChange}
          value={this.state.value}
        />
        <button
          onClick={this.clearInput}>Clear input
        </button>
      </div>
    )
  }
}

export default Input;
