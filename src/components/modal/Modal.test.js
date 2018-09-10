import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Modal from './Modal';

describe('Modal component', () => {

  it('should render properly', () => {
    const component = mount(
      <Modal
        isShown
      />,
    );

    expect(toJson(component)).toMatchSnapshot();

  });

  it('closes only on clicking outside of modal', () => {
    const callback = jest.fn();
    const component = mount(
      <Modal
        isShown
        onClose={callback}
      />,
    );

    // Simulate click inside
    component.find('div.modal').simulate('click');
    expect(callback).not.toBeCalled();

    // Simulate click outside
    component.find('div.modal-background').simulate('click');
    expect(callback).toBeCalled();
  });
});