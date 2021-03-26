import React, { Component } from 'react';
import ReviewButton from './ReviewButton';

export default class BookList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toDisplay: [],
    };
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.shelf !== this.props.shelf) {
      if (this.props.shelf.length === 0) {
        this.setState({
          toDisplay: [],
        });
      }
    }
  };

  handleDelete = (idToDelete) => {
    this.props.handleDeleteBook(idToDelete);
  };

  render() {
    const mappedBooks = this.props.books.map((val) => {
      return (
        <li key={val.id}>
          <img
            className={
              this.state.toDisplay.includes(val.id) ? `disabled` : null
            }
            src={val.img}
            alt="book cover"
            onClick={() => {
              this.props.addToShelf(val.title);
              this.setState({
                toDisplay: [...this.state.toDisplay, val.id],
              });
            }}
          />
          <p>{`${val.title} by ${val.author}`}</p>
          <ReviewButton
            books={this.props.books}
            id={val.id}
            handleAddReviewToBooks={this.props.handleAddReviewToBooks}
            reviews={val.reviews}
          />
          <button
            className="hvr-outline-in"
            onClick={() => this.handleDelete(val.id)}
          >
            Delete Book
          </button>
        </li>
      );
    });

    return (
      <div className="booklist">
        <ul>{mappedBooks}</ul>
      </div>
    );
  }
}
