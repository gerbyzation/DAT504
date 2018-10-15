import React, { Component } from 'react';

const Red = (props) => {
  return (
    <div className="wide red">
      <span onClick={props.goToBlue}>go to blue</span>
    </div>
  )
}

export default Red;
