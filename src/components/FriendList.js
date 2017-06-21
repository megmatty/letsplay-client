import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Friend List on Profile Page
export default class FriendList extends Component {
  render() {
    return (
      <div className="friend-lists-container">
        <h3>My Friends</h3>
        <div className="friend-list">
          {this.props.friends.map((friend,i) =>
            <div className="friend" key={i}>
              <img className="friend-avatar" src={friend.avatar} alt="friend avatar"/>
              <p>{friend.name}</p>
              <Link to='/friends'><img className="env-icon" src="envelope.png" alt="send icon"/></Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}