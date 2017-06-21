import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
} from 'react-router-dom';

//Redux Imports
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import 'normalize.css';
import './App.css';
import {friends, userLists, listNames, WIP, WTP, ATF} from './dummy';
import Moment from 'react-moment';

//Component & Container Imports
import Landing from '../src/components/Landing';
import Header from '../src/components/Header';
import User from '../src/components/User';
import ProfileList from '../src/components/ProfileList';
import ListButtonBar from '../src/components/ListButtonBar';
import FriendList from '../src/components/FriendList';
import FriendMatch from '../src/components/FriendMatch';
import Game from '../src/components/Game';
import List from '../src/components/List';
import ContactFriend from '../src/components/ContactFriend';
import Profile from '../src/containers/Profile';
import MyLists from '../src/containers/MyLists';
import GameDisplay from '../src/containers/GameDisplay';
import Search from '../src/containers/Search';
import Container from '../src/containers/Container';

// let store = createStore(App);

//Stuff to do 
  //Fetch API is working for now but think it's only mapping a single game result in the Game component. The Lists will need to populate maybe by storing list info in DB then making an API call for all those items? Not sure...data structure needs to be worked out
  //Needs alternate Nav that switches on login
    //Needs Search box and Nav links to Profile/Lists/Contact
  //Add friend to friends array on Add button (state needed for Friends components)
  //Signup needs link to /signup and modal or profile page with editable fields
  //Need "Read More" to shorten game descriptions...like maybe use:
    //https://www.npmjs.com/package/read-more-react??
  //Clicking game title right now goes to generic game instead of correct item from game list
  //Clicking contact next to friend name should pull friend name into contact form
  //Some links (e.g. button bar) will eventually be onclick functions that add items and then redirect
  //CSS for other media queries


//Render Whole Thing in App
class App extends Component {
  render() {
    return (     
      // <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Search />
            <Container lists={listNames} friends={friends}/> 
          </div>
        </Router>
      // </Provider>
    );
  }
}

export default App;
