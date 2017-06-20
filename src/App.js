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
import {friends, userLists, listNames, WIP, WTP, ATF} from './dummy';
import Moment from 'react-moment';

import SearchInput, {createFilter} from 'react-search-input'

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

//Header & Nav Bar
  //Needs nav switch on login
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
        <ProfileList listNames={listNames}/>
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
        {this.props.listNames.map((list, i) => {
          return <div className="profile-list" key={i}>
                    <Link to={`/lists/${list}`}>
                      <img className="arrow-icon" src="arrow.png" />
                    </Link>
                    <p className="list-name">{list}</p>
                 </div>;
        })}
      </div>
    );
  }
}

//My Lists View
class MyLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: WIP,
    };
    this.changeList = this.changeList.bind(this);
  }

  changeList(list) {
    console.log(list);
    if (list === "All-Time Faves") {
      this.setState({
        list: ATF
      });
    } else if (list === "Want to Play") {
      this.setState({
        list: WTP
      });
    } else if (list === "What I'm Playing") {
      this.setState({
        list: WIP
      });
    };

    console.log(this.state.list);
  }

  render() {
    return (
      <div className="content-container">
        <User user="janedoe"/>
        <h3>My Lists</h3>
        <ListButtonBar handler={this.changeList}/>
        <List list={this.state.list}/>
      </div>
    );
  }
}

//Lists Button Bar
class ListButtonBar extends Component {

  render() {
    return (
      <div className="list-button-bar">
          {listNames.map((list, i) => {
            return <div className="list-button" key={i} onClick={()=>{this.props.handler(list)}}>
                    <Link to={`/lists/${list}`}>{list}</Link>
                   </div>;
          })}
      </div>
    );
  }
}

//List of Games View
  //right now this is rendering the same as Game. Need Game to be dumb component to display all game data, then looped over with List. But not sure where how to pass state.
class List extends Component {
  render() {
    return (
      <div className="list-container">
        {this.props.list.map((game, i) => {
          return <div className="game-detail" key={i}>
                  <Link to="/game"><p>{game.name}</p></Link>
                  <img className="box-art" src={'//images.igdb.com/igdb/image/upload/t_cover_big/'+ game.cover.cloudinary_id + '.jpg'} alt='gamebox art' />
                  <p>Year: <Moment format="YYYY">{game.first_release_date}</Moment></p>
                  <p>Rating: {game.rating ? Math.floor(game.rating) + "/100" : "NR"}</p>
                 </div>;
          })}
        <Game /> {/*put here so we can see working API in List*/}
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
                <img className="add-icon" src="add.png"/>
              </Link>
            </div>
          )}
        </div>
      </div>

    );
  }
}

//Contact Friends Form View
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

//Game Display View
class GameDisplay extends Component {

  render() {
    {/*Need to fix bug here...this.changelist is not a function...pass down from Container?*/}
    return (
      <div className="game-container">
        <Game />
        <p className="add-list">Add Game to List</p>
        <ListButtonBar handler={this.changeList}/>
        <FriendMatch friends={friends}/>
      </div>
    );
  }
}

//Single Game Info View - current holds test Fetch but this isn't right. Needs probably to be a dumb render component that takes the game data from state/props
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
        .then(json => 
      this.setState({
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
              <p className='summary'>{game.storyline ? game.storyline : game.summary || 'This game has no summary'}</p>
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

//Search Feature
const KEYS = ['name', 'title', 'description', 'year']

class Search extends Component {
  constructor() {
    super();

    this.state = { searchTerm: '' };
    this.searchUpdated =this.searchUpdated.bind(this);
  }

  componentDidMount() {
   const request = new Request("https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=name&limit=50&offset=0&order=release_dates.date%3Adesc&search=", {
        headers: new Headers({
          'X-Mashape-Key': 'EUQMsXMjGmmshSjK8dQ9W31H8UOtp1wKG3bjsnwgRTlndgTXjR'
        })
      });

      fetch(request)
        .then(response => response.json())
        .then(json => this.setState({
          data: json
      }))
  }

  searchAPI(query) {
   const request = new Request(`https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=name&limit=50&offset=0&order=release_dates.date%3Adesc&search=${query}`, {
        headers: new Headers({
          'X-Mashape-Key': 'EUQMsXMjGmmshSjK8dQ9W31H8UOtp1wKG3bjsnwgRTlndgTXjR'
        })
      });

      fetch(request)
        .then(response => response.json())
        .then(json => this.setState({
          data: json
      }))
  }

  findGame(id) {
    const request = new Request(`https://igdbcom-internet-game-database-v1.p.mashape.com/games/${id}?fields=name%2Crating%2Cfirst_release_date%2Csummary%2Cstoryline%2Ccover&limit=1&offset=0&order=release_dates.date%3Adesc`, {
        headers: new Headers({
          'X-Mashape-Key': 'EUQMsXMjGmmshSjK8dQ9W31H8UOtp1wKG3bjsnwgRTlndgTXjR'
      })
    });

    fetch(request)
      .then(response => response.json())
      .then(json => this.setState({
        data: json
      }));
  }

  searchUpdated(term) {
    this.setState({searchTerm: term});
  }

  selectResult(id) {
    console.log(id);
    const selectedResult = this.state.data.filter(function(game) {
      return game.id === id;
    });
    this.findGame(id);
  } //Needs to take id and search api again for single game then pass that data to Game component, then redirect to /game with those props/state loaded

  render() {
    console.log(this.state.data);
    if (this.state.data) {
      const results = this.state.data.filter(createFilter(this.state.searchTerm, KEYS));
      return(
        <div className="search-bar">
          <SearchInput className='search-input' onChange={this.searchUpdated} />
          <button className="search-button" onClick={()=>{this.searchAPI(this.state.searchTerm)}}>Go</button>
          <div className="search-results">
          {results.map(item => {
            return (
              <p className="result-item" key={item.id} onClick={()=>{this.selectResult(item.id)}}>{item.name}</p> ) 
            })   
          }
          </div>
        </div>
      );
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
        <Route path='/lists' component={MyLists} />
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
          <Search />
          <Container lists={listNames} friends={friends}/> 
        </div>
      </Router>
    );
  }
}

export default App;
