import React, { Component } from 'react';

//User Profile Info
export default class User extends Component {
  render() {
    return (
      <div className="content-container">
        <div className="profile-container">
          <img className="avatar" src="http://www.radfaces.com/images/avatars/jane-lane.jpg" alt="user avatar"/>
          <h2>{this.props.user}</h2>
          <h4>About Me</h4>
          <p> Gluten-free ethical wolf tote bag umami. 3 wolf moon organic man braid hexagon, next level chicharrones small batch prism tacos banjo blue bottle bushwick.</p>
        </div>
      </div>
    );
  }
}