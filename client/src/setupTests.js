import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;

global.swallowErrors = (codeToRun) => {
  const { error } = console;
  console.error = () => {};

  codeToRun();

  console.error = error;
};
