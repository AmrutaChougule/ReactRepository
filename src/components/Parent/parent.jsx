import React, { Component } from "react";
import SecondChild from "../secondChild/secondChild";
import FirstChild from "../firstChild/firstChild";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sendMsgSecondChild: "",
    };
  }

  rcvMsg = (value) => {
    this.setState({
      sendMsgSecondChild: value,
    });
  };

 
  render() {
    return (
      <div>
        <FirstChild onSend={this.rcvMsg} />
        <SecondChild msgSend={this.state.sendMsgSecondChild} />
      </div>
    );
  }
}

export default Parent;
