import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <div>
        
        <nav class="navbar" style={{'backgroundColor': 'black ', 'minHeight': '60px', 'margin': '0', 'padding': '0'}}>
        <div class="container-fluid">
    <Link class="navbar-brand text-white" to="/">
      <img src="images/logo.jpg" alt="logo" height="40px" width="150px" />
    </Link>
  </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
