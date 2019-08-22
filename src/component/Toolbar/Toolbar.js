import React, { Component } from 'react';
import '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

export class Toolbar extends Component {
  render() {
    return (
      <header className='toolbar'>
        <nav className='toolbar-navigation'>
          <div>
            <DrawerToggleButton click={this.props.drawerClickHandler}/>
          </div>
          <div className='toolbar-logo'><a href="/">THE LOGO</a></div>
          <div className="spacer"></div>
          <div className='toolbar-navigation-item'>
            <ul>
              <li><a href="/">Products</a></li>
              <li><a href="/">Users</a></li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default Toolbar;
