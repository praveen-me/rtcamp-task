import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="wrapper">
        <h1 className="logo"><Link to="/">Simple Blog Theme</Link></h1>
        <p>Just another Wordpress Theme</p>
      </header>
    );
  }
}

export default Header;