import React, { Component } from 'react'
import './SideDrawer.css'

export class SideDrawer extends Component {
  render() {
    let drawerClass = 'side-drawer';

    if(this.props.showProps){
      drawerClass = 'side-drawer open';
    }

    return (
      <div>
        <nav className={drawerClass}>
          <ul>
            <li><a href="/">Products</a></li>
            <li><a href="/">User</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default SideDrawer
