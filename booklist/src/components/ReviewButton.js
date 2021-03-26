import React, { Component } from 'react';

export default class EditReviewButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toShow: false,
      toShowReviewBox: true,
      userInput: '',
    };
  }

  handleUpdateUserInput = (e) => {
    this.setState({
      userInput: e.target.value,
    });
  };

  handleShowReviews = () => {
    this.setState({
      toShow: !this.state.toShow,
    });
  };

  handleShowReviewbox = () => {
    this.setState({
      toShowReviewBox: !this.state.toShowReviewBox,
    });
  };

  render() {
    const reviewBox = (
      <div className="background-box">
        <div className="review-box">
          <ol id="review-list">
            {/* displays list of reviews  */}

            {this.props.reviews
              ? this.props.reviews.map((val, i) => {
                  return <li key={i}>{val}</li>;
                })
              : null}
          </ol>

          {/* adds new review  */}

          {this.state.toShowReviewBox ? (
            <button onClick={this.handleShowReviewbox}>Add a new review</button>
          ) : (
            <>
              <textarea
                id="review"
                onChange={this.handleUpdateUserInput}
                value={this.state.userInput}
              />{' '}
              <button
                onClick={() => {
                  this.handleShowReviewbox();
                  this.props.handleAddReviewToBooks(
                    this.props.id,
                    this.state.userInput
                  );
                  this.setState({ userInput: '' });
                }}
              >
                Submit Review
              </button>
            </>
          )}
          <button onClick={this.handleShowReviews} className="close-button">
            X
          </button>
        </div>
      </div>
    );

    return (
      // The button that shows the review and review features

      <div>
        <button onClick={this.handleShowReviews}>See Reviews</button>
        {this.state.toShow ? reviewBox : null}
      </div>
    );
  }
}
