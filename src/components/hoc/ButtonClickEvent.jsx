import React, { Component } from "react";
import withCounter from "./WithCounter";

class ButtonClickEvent extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.counter}</h1>
        <button onClick={this.props.incrementCounter}>Click Me</button>
      </div>
    );
  }
}

export default withCounter(ButtonClickEvent);
