import React from "react";

const AddCounter = (OG) => {
  class NG extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0
      };
    }

    increaseCount = () => {
      this.setState((prev) => {
        return { count: prev.count + 1 };
      });
    };

    render() {
      return (
        <OG
          count={this.state.count}
          increaseCount={this.increaseCount}
          {...this.props}
        />
      );
    }
  }
  return NG;
};
export default AddCounter;
