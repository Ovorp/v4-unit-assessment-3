import './css/App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import BookList from './components/BookList';
import Shelf from './components/Shelf';
import data from './data/data';
import SearchBar from './components/SearchBar';
import Form from './components/Form';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: data,
      shelf: [],
      idNumber: data.length + 1,
      formOn: false,
    };
  }

  handleAddData = (obj) => {};

  handleAddToShelf = (value) => {
    if (this.state.shelf.includes(value)) {
      return;
    }
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
        val.author.toLowerCase().includes(input.toLowerCase()) ||
        val.title.toLowerCase().includes(input.toLowerCase())
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

  handleAddToBookList = (obj) => {
    this.setState({
      books: [...this.state.books, obj],
    });
  };

  handleTurnOnForm = () => {
    this.setState({
      formOn: !this.state.formOn,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="app">
        <Header />
        <SearchBar
          handleFilterList={this.handleFilterList}
          handleClearSearch={this.handleClearSearch}
          handleTurnOnForm={this.handleTurnOnForm}
          formOn={this.state.formOn}
        />
        {this.state.formOn ? (
          <Form
            idNumber={this.state.idNumber}
            handleAddToBookList={this.handleAddToBookList}
            handleTurnOnForm={this.handleTurnOnForm}
          />
        ) : null}
        <main>
          <BookList
            books={this.state.books}
            addToShelf={this.handleAddToShelf}
            shelf={this.state.shelf}
          />
          <Shelf shelf={this.state.shelf} clearShelf={this.handleClearShelf} />
        </main>
      </div>
    );
  }
}
