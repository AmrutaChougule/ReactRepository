import React, { Component } from "react";
import MouseClickEvent from "./MouseClickEvent";
import ButtonClickEvent from "./ButtonClickEvent";

class HocComponent extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <MouseClickEvent></MouseClickEvent>
        <ButtonClickEvent></ButtonClickEvent>
      </div>
    );
  }
}

export default HocComponent;
