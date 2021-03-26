import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.idNumber,
      title: '',
      author: '',
      img: '',
    };
  }

  handleUserUpdate = (value, objKey) => {
    this.setState({
      [objKey]: value,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="form">
        <h4>Book Title</h4>
        <input
          onChange={(e) => {
            this.handleUserUpdate(e.target.value, 'title');
          }}
        />
        <h4>Author</h4>
        <input
          onChange={(e) => {
            this.handleUserUpdate(e.target.value, 'author');
          }}
        />
        <h4>Image URL</h4>
        <input
          onChange={(e) => {
            this.handleUserUpdate(e.target.value, 'img');
          }}
        />
        <button
          className="hvr-outline-in"
          onClick={() => {
            this.props.handleAddToBookList(this.state);
            this.setState({
              id: this.state.id + 1,
            });
            this.props.handleTurnOnForm();
          }}
        >
          Add to BookList
        </button>
      </div>
    );
  }
}
