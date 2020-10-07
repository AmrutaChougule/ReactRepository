import React, { Component } from "react";

class SecondChild extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h5>In second child message received from " {this.props.msgSend} "</h5>;
  }
}

export default SecondChild;
