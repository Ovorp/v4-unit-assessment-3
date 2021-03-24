import './css/App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import BookList from './components/BookList';
import Shelf from './components/Shelf';
import data from './data/data';
import SearchBar from './components/SearchBar';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: data,
      shelf: [],
    };
  }

  handleAddToShelf = (value) => {
    this.setState({
      shelf: [...this.state.shelf, value],
    });
  };

  handleClearShelf = () => {
    this.setState({
      shelf: [],
    });
  };

  handleFilterList = (input) => {
    const filteredList = this.state.books.filter((val) => {
      if (
        val.author.toLowerCase().includes(input) ||
        val.title.toLowerCase().includes(input)
      ) {
        return val;
      } else return null;
    });
    this.setState({
      books: filteredList,
    });
  };

  handleClearSearch = () => {
    this.setState({
      books: data,
    });
  };

  render() {
    console.log(this.state.shelf);
    return (
      <div className="app">
        <Header />
        <SearchBar
          handleFilterList={this.handleFilterList}
          handleClearSearch={this.handleClearSearch}
        />
        <main>
          <BookList
            books={this.state.books}
            addToShelf={this.handleAddToShelf}
          />
          <Shelf shelf={this.state.shelf} clearShelf={this.handleClearShelf} />
        </main>
      </div>
    );
  }
}
