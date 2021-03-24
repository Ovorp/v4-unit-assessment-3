import React, { Component } from 'react';

export default class Shelf extends Component {
  render() {
    console.log(this.props.shelf.length);
    return (
      <div className="shelf">
        <h2>Your Shelf</h2>
        {this.props.shelf.length === 0 ? (
          <p>You should read more!!</p>
        ) : (
          <p>I'm glad you are reading :)</p>
        )}
        <button onClick={this.props.clearShelf}>Clear</button>
        <div className="shelf-list">
          <ul>
            {this.props.shelf.map((title, index) => {
              return <li key={(title, index)}>{title}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
