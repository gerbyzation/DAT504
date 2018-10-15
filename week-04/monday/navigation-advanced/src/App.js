import React, { Component } from 'react';

import { Link, Route } from 'react-router-dom';

import Red from './Red'
import Blue from './Blue';
import Green from './Green';

import Menu from './Menu';

class App extends Component {
  render () {
    return (
      <div>
        <Menu />
        <main>
          <Route path='/red' component={Red} />
          <Route path='/blue' component={Blue} />
          <Route path='/green' component={Green} />
        </main>
      </div>
    )

  }
}

export default App;
