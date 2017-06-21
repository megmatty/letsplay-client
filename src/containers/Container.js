import React, { Component } from 'react';
import Landing from '../components/Landing';
import Profile from './Profile';
import MyLists from './MyLists';
import GameDisplay from './GameDisplay';
import ContactFriend from '../components/ContactFriend';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

//Container for SPA Components by Route
export default class Container extends Component {
  
  render() {
    return (
      <div className="main-container">
        <Route exact path='/' component={Landing}/>
        <Route exact path='/profile' component={Profile}/>
        <Route path='/lists' component={MyLists} />
        <Route exact path='/game' component={GameDisplay}/>
        <Route exact path='/friends' component={ContactFriend}/>
      </div>
    );
  }
}
