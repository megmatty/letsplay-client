import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

//List of Games View
  //right now this is rendering the same as Game. Need Game to be dumb component to display all game data, then looped over with List. But not sure where how to pass state.
export default class List extends Component {
  render() {
    return (
      <div className="list-container">
        {this.props.list.map((game, i) => {
          return <div className="game-detail" key={i}>
                  <Link to="/game"><p>{game.name}</p></Link>
                  <img className="box-art" src={'//images.igdb.com/igdb/image/upload/t_cover_big/'+ game.cover.cloudinary_id + '.jpg'} alt="gamebox art" />
                  <p>Year: <Moment format="YYYY">{game.first_release_date}</Moment></p>
                  <p>Rating: {game.rating ? Math.floor(game.rating) + "/100" : "NR"}</p>
                 </div>;
          })}
      </div>
    );
  }
}