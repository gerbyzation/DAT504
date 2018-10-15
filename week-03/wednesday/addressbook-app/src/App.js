import React, { Component } from 'react';

const people = [
  {name: 'Gerrit'},
  {name: 'Gerrit'},
  {name: 'Gerrit'},
]

class App extends Component {
  state = {
    people: []
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    console.log('get data from addressbook')
    fetch('addressbook/')
      .then(response => response.json())
      .then(response => {
        this.setState({
          people: response
        })
      })
  }

  savePerson = (event) => {
    fetch('addressbook/', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: 'Mac',
        place: 'MacTown',
        age: 51
      })
    }).then(response => {
      if (!response.ok) console.error(response)
    })
  }

  render () {
    return (
      <div>
        <button onClick={this.savePerson}>Save person</button>
        <input type='text' onChange={this.onChange} />
        <PeopleList people={this.state.people} />
      </div>
    )
  }
}

const PeopleList = (props) => {
  const listItems = props.people.map(person => <li>{person.name}</li>)
  return (
    <ul>
      {listItems}
    </ul>
  )
}

export default App;
