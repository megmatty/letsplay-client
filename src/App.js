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
import {friends, game, listNames} from './dummy';
import Moment from 'react-moment';

//Stuff to do 
  //Fetch API is working for now but think it's on the wrong component...need to get mapped array of search results into a List component and keep Game component for a single item
  //Needs alternate Nav that switches on login
    //Needs Search box and Nav links to Profile/Lists/Contact
  //Add friend to friends array on Add button (state needed for Friends components)
  //Signup needs link to /signup and modal or profile page with editable fields
  //Need "Read More" to shorten game descriptions...like maybe use:
    //https://www.npmjs.com/package/read-more-react??
  //Clicking game title right now goes to generic game instead of correct item from game list
  //Needs some kind of Switch routing to display correct lists
    //Correct items need to be stored in separate list arrays
  //Clicking contact next to friend name should pull friend name into contact form

//Header & Nav Bar
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
        <User user="Jane Doe"/>
        <ProfileList lists={listNames}/>
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
          <img className="avatar" src="http://www.radfaces.com/images/avatars/jane-lane.jpg"/>
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
                    <img className="arrow-icon" src="arrow.png" />
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
              <img className="friend-avatar" src={friend.avatar} />
              <p>{friend.name}</p>
              <Link to='/friends'><img className="env-icon" src="envelope.png" /></Link>
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
        <p className="match-title">User Matches</p>
        <div className="friend-list">
          {this.props.friends.map((friend,i) =>
            <div className="friend" key={i}>
              <img className="friend-avatar" src={friend.avatar}/>
              <p>{friend.name}</p>
              <p>plays this game</p>
              <Link to="/profile">
                <span className="add-friend">
                  <img className="add-icon" src="add.png"/>
                  <span>Add</span>
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>

    );
  }
}

//Contact Friends View
class ContactFriend extends Component {
  render() {
    return (
      <div className="contact-container">
        <h3>Contact Friend</h3>
        <form className="contact-form">
          <label htmlFor="to">
            <span>To:</span>
          </label>
          <input type="text" name="to" defaultValue="maxpower"/>
          <br />
          <label htmlFor="from">
            <span>Game:</span>
          </label>
          <input type="text" name="from" />
          <br />
          <label htmlFor="message">
            <span>Message:</span>
          </label>
          <textarea name="message" defaultValue="Hey there, I would like to play with you.">
          </textarea>
          <br />
          <div className="captcha">
            <input type="checkbox" required/>
              <label htmlFor="captcha">
                  <span>I am not a robot</span>
              </label>
          </div>
          <button className="send-email">Send Email</button>             
        </form>
      </div>
    );
  }
}

//My Lists View
class MyLists extends Component {
  render() {
    return (
      <div className="content-container">
        <User user="janedoe"/>
        <h3>My Lists</h3>
          <div className="list-button-bar">
          {listNames.map((list, i) => {
            return <div className="list-button" key={i}>
                      <Link to={`/lists/${list}`}>{list}</Link>
                   </div>;
          })}
          </div>
        <List />
      </div>
    );
  }
}

//Single List View 
class List extends Component {
  render() {
    return (
      <div className="list-container">
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
        <div className="list-button-bar">
          <p className="add-list">Add Game to List</p>
          {listNames.map((list, i) => {
            return <div className="list-button" key={i}>
                      <Link to={`/lists/${list}`}>{list}</Link>
                   </div>;
          })}
        </div>
        <FriendMatch friends={friends}/>
      </div>
    );
  }
}

//Single Game Info View
class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: true
    }
  }

  componentDidMount() {
      const request = new Request("https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=name%2Crating%2Cfirst_release_date%2Csummary%2Cstoryline%2Ccover&limit=1&offset=0&order=release_dates.date%3Adesc&search=zelda", {
        headers: new Headers({
          'X-Mashape-Key': 'EUQMsXMjGmmshSjK8dQ9W31H8UOtp1wKG3bjsnwgRTlndgTXjR'
        })
      });

      fetch(request)
        .then(response => response.json())
        .then(json => this.setState({
          data: json,
          loading: false
      }))
  }

  render() {
    if (this.state.loading === false && this.state.data) {
      return (
        <div className="game-detail">
          {this.state.data.map(game => 
            <div className="game" key={game.id}>
              <Link to="/game"><p>{game.name}</p></Link>
              <img className="box-art" src={'//images.igdb.com/igdb/image/upload/t_cover_big/'+ game.cover.cloudinary_id + '.jpg'} alt='gamebox art' />
              <p>Year: <Moment format="YYYY">{game.first_release_date}</Moment></p>
              <p>Rating: {Math.floor(game.rating)}/100</p>
              <p className='summary'>{game.storyline ? game.storyline.substring(0,100) + '...' : game.summary.substring(0,100) + '...' || 'This game has no summary'}</p>
            </div>
          )}
        </div>); 
      } else {
          return (
            <div>Loading...</div>
          );
    }
  }
}

//Container for SPA Components by Route
class Container extends Component {
  render() {
    return (
      <div className="main-container">
        <Route exact path='/' component={Landing}/>
        <Route exact path='/profile' component={Profile}/>
        <Route path='/lists' component={MyLists}/>
        {/*Needs better implementation...Switch?*/}
          {/*<Route exact path={`/lists/${listNames[0]}`} component={WIP}/>
          <Route exact path={`/lists/${listNames[1]}`} component={WTP}/>
          <Route exact path={`/lists/${listNames[2]}`}component={ATF}/>*/}
        <Route exact path='/game' component={GameDisplay}/>
        <Route exact path='/friends' component={ContactFriend}/>
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
          <Container lists={listNames} friends={friends}/>
        </div>
      </Router>
    );
  }
}

export default App;
