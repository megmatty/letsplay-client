import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

export default class Game extends Component {
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