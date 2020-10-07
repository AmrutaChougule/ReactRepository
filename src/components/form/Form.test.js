import React from "react";
import { shallow, mount } from "enzyme";
import Form from "./Form-simple";

// it('CheckboxWithLabel changes the text after click', () => {
//   // Render a checkbox with label in the document
//   const wrapper = shallow(<Form/>);
//   const checkbox = wrapper.find("input").type("checkbox");

//   expect(checkbox.contains(false));

//   checkbox.find('input').simulate('change');

//   expect(checkbox.contains(true));
// });

it("input value name changes", () => {
  // Render a checkbox with label in the document
  const wrapper = shallow(<Form />);
  // const name = wrapper.find("input").type("text").name("name");

  expect(wrapper.find("input").type("number").isEmpty().to.equal(true));

  wrapper.find("input").type("number").simulate("change");

  expect(wrapper.find("input").type("number").isEmpty().to.equal(false));
});

// it('Make sure inputted text is shorter than max length', () => {
//   const result = mount(<input maxLength={10}></input>);
//   result.find('input').simulate('change', { target: { value: '1234567890!!!' } });
//   expect(result.state().value).to.equal("1234567890");
// });
