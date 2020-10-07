import React from "react";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import HocComponent from "./HocComponent";
import ButtonComponent from "./ButtonClickEvent";
import MouseComponent from "./MouseClickEvent";
import WithCounter from "./WithCounter";

it("should component render HocComponent", () => {
  const wrapper = shallow(<HocComponent/>);
  const header = wrapper.contains("ButtonComponent", "MouseComponent");
});
