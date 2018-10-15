import React, { Component } from 'react';

import Red from './Red'
import Blue from './Blue';
import Green from './Green';

import Menu from './Menu';

class App extends Component {
  state = {
    currentPage: 'red'
  }

  goToPage = (pagename) => {
    this.setState({
      currentPage: pagename
    })
  }

  render () {
    var page;
    if (this.state.currentPage == 'red') {
      page = <Red goToBlue={() => this.goToPage('blue')} />
    } else if ( this.state.currentPage == 'green') {
      page = <Green />
    } else if (this.state.currentPage == 'blue') {
      page = <Blue />
    }
    return (
      <div>
        <Menu goToPage={this.goToPage} />
        <main>
          {page}
        </main>
      </div>
    )

  }
}

export default App;
