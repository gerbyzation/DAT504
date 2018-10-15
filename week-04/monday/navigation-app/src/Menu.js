import React, { Component } from 'react';

const Menu = (props) => {
    return (
      <nav>
        <ul>
          <li onClick={() => props.goToPage('blue')}>Blue</li>
          <li onClick={() => props.goToPage('red')}>Red</li>
          <li onClick={() => props.goToPage('green')}>Green</li>
        </ul>
      </nav>
    )
}

export default Menu;
