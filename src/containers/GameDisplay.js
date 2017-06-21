import React, { Component } from 'react';
import Game from '../components/Game';
import ListButtonBar from '../components/ListButtonBar';
import FriendMatch from '../components/FriendMatch';
import { friends } from '../dummy';

//Game Display View - for search result or clicked on single games
export default class GameDisplay extends Component {

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
