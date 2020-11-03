import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      topic: "pubg"
    };
    this.nameRef = React.createRef();
  }
  handleUserNameChange = (event) => {
    this.setState({
      userName: event.target.value
    });
  };
  handleCommentChange = (event) => {
    this.setState({
      comment: event.target.value
    });
  };
  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value
    });
  };
  handleSubmit = (event) => {
    alert(
      `${this.state.userName} gave "${this.state.comment}" as comments for ${this.state.topic}!`
    );
    event.preventDefault();
  };
  componentDidMount() {
    this.nameRef.current.focus();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label> What is you name mate? </label>
            <input
              type="text"
              value={this.state.userName}
              onChange={this.handleUserNameChange}
              ref={this.nameRef}
            />
          </div>
          <div>
            <label>Topic: </label>
            <select value={this.state.topic} onChange={this.handleTopicChange}>
              <option value="pubg">pubg</option>
              <option value="csgo">csgo</option>
              <option value="fortnight">fortnight</option>
            </select>
          </div>
          <div>
            <label>Any further Comments: </label>
            <textarea
              value={this.state.comments}
              onChange={this.handleCommentChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
