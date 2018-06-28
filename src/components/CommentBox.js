import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentBox extends Component {
  state = {  comment: '' };

  handleChange = event => {
    this.setState({ comment: event.target.value });
    console.log(event.target.value);
  };

  handleSubmit = event => {
    event.preventDefault();

    // Call an action creator
    // And save the comment
    this.props.saveComment(this.state.comment);

    this.setState({ comment: '' });
  };

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea
            value={this.state.comment}
            onChange={this.handleChange}
          />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className="fetch_comments" onClick={this.props.fetchComments}>Fetch Comments</button>
      </div>
    );
  };
};

export default connect(null, actions)(CommentBox);
