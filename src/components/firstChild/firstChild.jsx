import React, { Component } from "react";

class FirstChild extends Component {
  state = {
    msg: "Child 1",
  };

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.onSend(this.state.msg);
          }}
        >
          Send Message
        </button>
      </div>
    );
  }
}

export default FirstChild;
