import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
} from 'react-router-dom';
import Moment from 'react-moment';
/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class UserDetail extends Component {
    render() {
        if (!this.props.lists) {
            return (<div>Select a user...</div>);
        }
            return (
                <div>
                    {this.props.lists.data.map((game, i) => {
                        return <div className="game-detail" key={i}>
                            <Link to="/game"><p>{game.name}</p></Link>
                            <img className="box-art" src={'//images.igdb.com/igdb/image/upload/t_cover_big/'+ game.cover.cloudinary_id + '.jpg'} alt='gamebox art' />
                            <p>Year: <Moment format="YYYY">{game.first_release_date}</Moment></p>
                            <p>Rating: {game.rating ? Math.floor(game.rating) + "/100" : "NR"}</p>
                 </div>;
            })}
                </div>
            );
        };
    }

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
    return {
        lists: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);
