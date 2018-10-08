import React, { Component } from 'react';


class App extends Component {
  state = { active: false }

  toggleStatus = () => {
    console.log('current status', this.state.active, 'new status', !this.state.active);
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    return <Status
      toggleStatus={this.toggleStatus}
      active={this.state.active}
    />
  }
}

const Status = (props) => {
  let status = props.active == true ? 'on' : 'off';
  return (
    <div>
      <h1>the switch is <span style={{textTransform: 'uppercase'}}>{status}</span></h1>
      <button onClick={props.toggleStatus}>Toggle status</button>
    </div>
  );
}

export default App;
