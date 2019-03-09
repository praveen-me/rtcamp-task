import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="wrapper">
        <h1 className="logo">Simple Blog Theme</h1>
        <p>Just another Wordpress Theme</p>
      </header>
    );
  }
}

export default Header;