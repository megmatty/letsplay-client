import React, { Component } from 'react';
import { Link } from 'react-router-dom';


//Friend Matches
export default class FriendMatch extends Component {
  render () {
    return (
      <div className="match-container">
        <p className="match-title">User Matches</p>
        <div className="friend-list">
          {this.props.friends.map((friend,i) =>
            <div className="friend" key={i}>
              <img className="friend-avatar" src={friend.avatar} alt="friend avatar"/>
              <p>{friend.name}</p>
              <p>plays this game</p>
              <Link to="/profile">
                <img className="add-icon" src="add.png" alt="add icon"/>
              </Link>
            </div>
          )}
        </div>
      </div>

    );
  }
}