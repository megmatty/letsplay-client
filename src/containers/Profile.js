import React, { Component } from 'react';
import User from '../components/User';
import ProfileList from '../components/ProfileList';
import FriendList from '../components/FriendList';
import { listNames, friends } from '../../src/dummy'; 

//Profile Page
export default class Profile extends Component {
  render() {
    return (
      <div className="content-container">      
        <User user="Jane Doe"/>
        <ProfileList listNames={listNames}/>
        <FriendList friends={friends}/>
      </div>
    );
  }
}