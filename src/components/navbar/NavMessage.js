import React, { Component } from "react";
import AddCounter from "../AddCounter";

class NavMessage extends Component {
  constructor() {
    super();
    this.state = {
      message: "blah"
    };
    //this.update5Blah = this.update5Blah.bind(this);
  }
  updateBlah() {
    console.log(this.props);
    this.setState(
      (prev) => ({ message: "not " + prev.message }),
      () => {
        this.props.countHandler(this.state.message);
      }
    );
  }

  update5Blah = () => {
    this.props.increaseCount();
    this.updateBlah();
    this.updateBlah();
    this.updateBlah();
    this.updateBlah();
    this.updateBlah();
  };
  render() {
    return (
      <div>
        <h3>Button has been clicked {this.props.count} times</h3>
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
export default AddCounter(NavMessage);
