import React, { Component } from 'react';

function validatePhone(phoneNumber) {
  let error = ''
  if (phoneNumber.length < 12) {
    error = 'Number is too short! 12 numbers please!';
  }
  return error;
}

class PhoneNumberField extends Component {
  state = {
    number: '',
    error: ''
  }

  onChange = (event) => {
    this.setState({
      number: event.target.value,
      error: validatePhone(event.target.value),
    })
  }

  render() {
    return (
      <div>
        <p>Number: {this.state.number}</p>
        { this.state.error ? <p>{this.state.error}</p> : ''}
        <input
          type='text'
          onChange={this.onChange}
          value={this.state.number}
          placeholder="phone number"
        />
      </div>
    )
  }
}

export default PhoneNumberField;
