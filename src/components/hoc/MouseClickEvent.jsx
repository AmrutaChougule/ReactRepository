import React, { Component } from "react";
import withCounter from "./WithCounter";

class MouseClickEvent extends Component {
  render() {
    return (
      <div>
        <h2 onMouseOver={this.props.incrementCounter}>
          Count is: {this.props.counter}
        </h2>
      </div>
    );
  }
}

export default withCounter(MouseClickEvent);
