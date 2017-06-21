import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Lists Display on Profile
export default class ProfileList extends Component {
  render() {
    return (
      <div className="profile-lists-container">
        <Link to="/lists"><h3>My Lists</h3></Link>
        {this.props.listNames.map((list, i) => {
          return <div className="profile-list" key={i}>
                    <Link to={`/lists/${list}`}>
                      <img className="arrow-icon" src="arrow.png" alt="arrow icon"/>
                    </Link>
                    <p className="list-name">{list}</p>
                 </div>;
        })}
      </div>
    );
  }
}