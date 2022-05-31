import React from 'react';

import './colors.scss';

const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';

class Colors extends React.Component {
  constructor(props) {
    super(props);
  }

  setBodyColor = color => {
    document.body.style.backgroundColor = color;
  }

  render() {
    return (
      <div className="colors">
        <button 
          style={{
            backgroundColor: RED
          }} 
          className="colors__button"
          onClick={this.setBodyColor.bind(this, RED)}
        ></button>
        <button 
          style={{
            backgroundColor: GREEN
          }}  
          className="colors__button"
          onClick={this.setBodyColor.bind(this, GREEN)}
        ></button>
        <button 
          style={{
            backgroundColor: BLUE
          }} 
          className="colors__button"
          onClick={this.setBodyColor.bind(this, BLUE)}
        ></button>
    </div>
    )
  }
};

export default Colors;

