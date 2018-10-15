import React, { Component } from 'react';

import { Link } from 'react-router-dom';

const Menu = (props) => {
    return (
      <nav>
        <ul>
          <li><Link to='/red'>Red</Link></li>
          <li><Link to='/blue'>Blue</Link></li>
          <li><Link to='/green'>Green</Link></li>
        </ul>
      </nav>
    )
}

export default Menu;
