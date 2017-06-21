import React, { Component } from 'react';

//Contact Friends Form View
export default class ContactFriend extends Component {
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