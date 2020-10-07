import React, { Component } from "react";

const WithCounter = (OrignalCounter) => {
  class Counter extends Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 1,     
      };
    }

    incrementCounter = () => {
      this.setState({
        counter: this.state.counter + 1,
      });
    };
    render() {
      return (
        <OrignalCounter
          counter={this.state.counter}
          incrementCounter={this.incrementCounter}
        ></OrignalCounter>
      );
    }
  }
  return Counter;
};
export default WithCounter;
