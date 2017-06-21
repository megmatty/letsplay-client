import React, { Component } from 'react';
import User from '../components/User';
import ListButtonBar from '../components/ListButtonBar';
import List from '../components/List';
import { WIP, WTP, ATF } from '../dummy';

//My Lists View
export default class MyLists extends Component {
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