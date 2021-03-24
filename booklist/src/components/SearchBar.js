import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: '',
    };
  }

  handleUserInput = (e) => {
    this.setState({
      userInput: e.target.value,
    });
  };

  handleClearUserInput = () => {
    this.setState({
      userInput: '',
    });
  };

  render() {
    return (
      <div className="search">
        <input onChange={this.handleUserInput} value={this.state.userInput} />
        <button
          onClick={() => {
            this.props.handleFilterList(this.state.userInput);
          }}
        >
          Search
        </button>
        <button
          onClick={() => {
            this.handleClearUserInput();
            this.props.handleClearSearch();
          }}
        >
          Clear Search
        </button>
      </div>
    );
  }
}
