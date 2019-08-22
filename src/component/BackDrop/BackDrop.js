import React, { Component } from 'react'
import './BackDrop.css'

export class BackDrop extends Component {
  render() {
    return (
      <div className='backdrop' onClick={this.props.backdropClickHandler}/>
    )
  }
}

export default BackDrop
