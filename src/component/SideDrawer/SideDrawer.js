import React, { Component } from 'react'
import './SideDrawer.css'

export class SideDrawer extends Component {
  render() {
    return (
      <div>
        <nav className="side-drawer">
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
