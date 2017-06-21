import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { listNames } from '../dummy';

//Lists Button Bar
export default class ListButtonBar extends Component {

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