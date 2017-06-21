import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Header & Nav Bar
  //Needs nav switch on login
export default class Header extends Component {
  render() {
    return (
      <div className="header">      
        <Link to="/"><h3>Let's Play</h3></Link>
        <div className="btn-group">     
          <button className="signup">Sign Up</button>
          <button><Link to="/profile">Login</Link></button>
        </div>
      </div>
    );
  }
}