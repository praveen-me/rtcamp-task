import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <h1 className="logo">Wordpress Blog Theme</h1>
        <p>Header</p>
      </header>
    );
  }
}

export default Header;