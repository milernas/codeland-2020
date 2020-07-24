import React from "react";
import { mount } from 'enzyme';
import Christy from '../pages/participants/christy';

describe("Christy's page", () => {
  it("displays Christy's name", () => {
    const wrapper = mount(<Christy />);
    expect(wrapper.text().includes('Christy')).toBe(true);
  });
});
