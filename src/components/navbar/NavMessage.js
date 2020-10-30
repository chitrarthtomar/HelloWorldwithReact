import React, { Component } from "react";

export default class NavMessage extends Component {
  constructor() {
    super();
    this.state = {
      message: "blah"
    };
    //this.update5Blah = this.update5Blah.bind(this);
  }
  updateBlah() {
    this.setState(
      (prev) => ({ message: "not " + prev.message }),
      () => {
        this.props.countHandler(this.state.message);
      }
    );
  }

  update5Blah = () => {
    this.updateBlah();
    this.updateBlah();
    this.updateBlah();
    this.updateBlah();
    this.updateBlah();
  };
  render() {
    return (
      <div>
        <h3>This is nav message: {this.state.message}</h3>
        <button onClick={this.update5Blah}>click me</button>
        <br />
        <br />
        <button
          onClick={() => {
            this.setState(
              {
                message: "blah"
              },
              () => {
                this.props.countHandler(this.state.message);
              }
            );
          }}
        >
          reset
        </button>
      </div>
    );
  }
}
