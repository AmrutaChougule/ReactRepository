import React from "react";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import App from "./App";

it("should component render header", () => {
  const wrapper = shallow(<App />);
  const header = wrapper.contains("Header");
  const HocComponent = wrapper.contains("HocComponent");
  const Form = wrapper.contains("Form");
  const Users = wrapper.contains("Users");
});
