import React, { Component } from 'react';
import SearchInput, {createFilter} from 'react-search-input';

//Search Feature
export default class Search extends Component {
  constructor(props) {
    super(props);

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
      const KEYS = ['name'];
      const results = this.state.data.filter(createFilter(this.state.searchTerm, KEYS));
      return(
        <div className="search-bar">
          <SearchInput className='search-input' onChange={this.searchUpdated} placeholder="Search by Game Title"/>
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