import React, { Component } from 'react'
import './Header.css';
import {Icon } from 'semantic-ui-react'


class Header extends Component {
  render() {
    return (
      <nav className='Navbar'>
        <h1>RavenPC</h1>
        <Icon name='js'size='large' />
      </nav>
    )
  }
}

export default Header;