import React, { Component } from 'react';
import './DrawerToggleButton.css';

export class DrawerToggleButton extends Component {
  render() {
    return (
      <div>
        <button className="toggleButton" onClick={this.props.click}>
          <div className="toggleButton-line"/>
          <div className="toggleButton-line"/>
          <div className="toggleButton-line"/>
        </button>
      </div>
    )
  }
}

export default DrawerToggleButton
