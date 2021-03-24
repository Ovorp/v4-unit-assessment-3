import React, { Component } from 'react';

export default class BookList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toDisplay: [],
    };
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps !== this.props) {
      if (this.props.shelf.length === 0) {
        this.setState({
          toDisplay: [],
        });
      }
    }
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
