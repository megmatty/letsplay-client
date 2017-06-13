import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
} from 'react-router-dom';
import 'normalize.css';
import './App.css';
import {friends} from './dummy';

//Stuff to do tomorrow
  //Style CSS
  //Make Contact Component (email)
  //Get a fetch working for GameDetail component from IGDB API 
    //Loop through results on GameList component as a placeholder list
  //Pull appropriate placeholder icons for envelope & avatars




//Header Bar
class Header extends Component {
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

//Landing Page (static)
class Landing extends Component {
  render() {
    return (
        <div className="container">
          <div className="hero">
            <h1>Let's Play</h1>
            <p>Hashtag irony whatever, live-edge 3 wolf moon readymade vegan. Celiac twee pitchfork readymade hashtag occupy. Flexitarian mlkshk before they sold out, pour-over celiac gochujang waistcoat pok pok.</p>
          </div>
          <div className="feature">
            <h3>Search Games</h3>
            <p>Taiyaki williamsburg keffiyeh, kitsch tattooed single-origin coffee helvetica.</p>
          </div>
          <div className="feature">
            <h3>Add to Lists</h3>
            <p>Taiyaki williamsburg keffiyeh, kitsch tattooed single-origin coffee helvetica.</p>
          </div>
          <div className="feature">
            <h3>Find Friends</h3>
            <p>Taiyaki williamsburg keffiyeh, kitsch tattooed single-origin coffee helvetica.</p>
          </div>
          <footer>Meg Matty &copy; 2017</footer>
        </div>
    );
  }
}

//Profile Page
class Profile extends Component {
  render() {
    return (
      <div className="content-container">      
        <User />
        <ProfileList />
        <FriendList />
      </div>
    );
  }
}


//User Profile Info
class User extends Component {
  render() {
    return (
      <div className="content-container">
        <div className="profile-container">
          <img className="avatar" src="avatar.png"/>
          <h2>Jane Doe</h2>
          <h4>About Me</h4>
          <p> Gluten-free ethical wolf tote bag umami. 3 wolf moon organic man braid hexagon, next level chicharrones small batch prism tacos banjo blue bottle bushwick.</p>
        </div>
      </div>
    );
  }
}

//Lists Display on Profile
class ProfileList extends Component {
  render() {
    return (
      <div className="profile-lists-container">
        <Link to="/lists"><h3>My Lists</h3></Link>
        <div className="profile-list">
          <img className="arrow-icon" src="avatar.png" />
          <p className="list-name">What I'm Playing</p>
        </div>
        <div className="profile-list">
          <img className="arrow-icon" src="avatar.png" />
          <p className="list-name">Want to Play</p>
        </div>
        <div className="profile-list">
          <img className="arrow-icon" src="avatar.png" />
          <p className="list-name">All-Time Faves</p>
        </div>
      </div>
    );
  }
}

//Friend List on Profile Page
class FriendList extends Component {
  render() {
    return (
      <div className="friend-lists-container">
        <h3>My Friends</h3>
        <div className="friend-list">
          {friends.map((friend,i) =>
            <div className="friend" key={i}>
              <img className="arrow-icon" src={friend.avatar} />
              <p>{friend.name}</p>
              <img className="arrow-icon" src="avatar.png" />
            </div>
          )}
        </div>
      </div>
    );
  }
}

//Friend Matches
class FriendMatch extends Component {
  render () {
    return (
      <div className="match-container">
        <p>User Matches</p>
        <div className="friend-list">
          {friends.map((friend,i) =>
            <div className="friend" key={i}>
              <img className="arrow-icon" src={friend.avatar}/>
              <p>{friend.name}</p>
              <span>plays this game</span>
              <span>
                <img className="arrow-icon" src="avatar.png"/>
                <span>Add</span>
              </span>
            </div>
          )}
        </div>
      </div>

    );
  }
}

//My Lists View
class MyLists extends Component {
  render() {
    return (
      <div className="content-container">
        <User />
        <h3>My Lists</h3>
          <select>
            <option>What I'm Playing</option>
            <option>Want to Play</option>
            <option>All Time Faves</option>
          </select>
        <Game />
      </div>
    );
  }
}

//Game List View
class Game extends Component {
  render() {
    return (
      <div className="game-container">
        <div>Box Art Placeholder</div>
        <Link to="/game"><p>Game Title</p></Link>
        <p>Year</p>
        <p>Rating</p>
        <p>Description: Edison bulb asymmetrical flexitarian blue bottle. Mustache af bushwick austin schlitz scenester, tbh letterpress williamsburg kogi shaman pok pok. Ennui master cleanse mlkshk literally.</p>
      </div>
    );
  }
}

//Game Detail View
class GameDetail extends Component {
  render() {
    return (
      <div className="game-container">
        <Game />
        <select>
          <option disabled selected>Add to list</option>
          <option>What I'm Playing</option>
          <option>Want To Play</option>
          <option>All-Time Faves</option>
        </select>
        <FriendMatch />
      </div>
    );
  }
}

//Container for SPA Components by Route
class Container extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/profile' component={Profile}/>
        <Route exact path='/lists' component={MyLists}/>
        <Route exact path='/game' component={GameDetail}/>
      </div>
    );
  }
}

//Render Whole Thing in App
class App extends Component {
  render() {
    return (     
      <Router>
        <div className="App">
          <Header />
          <Container />
        </div>
      </Router>
    );
  }
}

export default App;
