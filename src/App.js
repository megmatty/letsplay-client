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
import {game} from './dummy';

//Stuff to do tomorrow
  //Style CSS
  //Make Contact Component (email)
  //Get a fetch working for GameDisplay component from IGDB API 
    //Loop through results on GameList component as a placeholder list
  //Pull appropriate placeholder icons for envelope & avatars
  //props work




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
    const lists = ["What I\'m Playing", "Want to Play", "All-Time Faves"];
    return (
      <div className="content-container">      
        <User user="Jane Doe"/>
        <ProfileList lists={lists}/>
        <FriendList friends={friends}/>
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
          <h2>{this.props.user}</h2>
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
        {this.props.lists.map((list, i) => {
          return <div className="profile-list" key={i}>
                    <img className="arrow-icon" src="avatar.png" />
                    <p className="list-name" >{list}</p>
                 </div>;
        })}
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
          {this.props.friends.map((friend,i) =>
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
          {this.props.friends.map((friend,i) =>
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
        <Game game={game}/>
      </div>
    );
  }
}


//Game Display View
class GameDisplay extends Component {
  render() {
    return (
      <div className="game-container">
        <Game game={game}/>
        <select>
          <option disabled defaultValue>Add to list</option>
          <option>What I'm Playing</option>
          <option>Want To Play</option>
          <option>All-Time Faves</option>
        </select>
        <FriendMatch friends={friends}/>
      </div>
    );
  }
}

//Game Info View
class Game extends Component {
  render() {
    return (
      <div className="game-container">
        <div>Box Art Placeholder</div>
        <Link to="/game"><p>{this.props.game.title}</p></Link>
        <p>Year: {this.props.game.year}</p>
        <p>Rating: {this.props.game.rating}</p>
        <p>Description: {this.props.game.description}</p>
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
        <Route exact path='/game' component={GameDisplay}/>
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
