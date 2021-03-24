import React, { Component } from 'react';

export default class BookList extends Component {
  render() {
    const mappedBooks = this.props.books.map((val) => {
      return (
        <li key={val.id}>
          <img
            src={val.img}
            alt="book cover"
            onClick={() => {
              this.props.addToShelf(val.title);
            }}
          />
          <p>{`${val.title} by ${val.author}`}</p>
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
