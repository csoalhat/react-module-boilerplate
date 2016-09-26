import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import Header from './Header';
import styles from './Header.css';


describe('<Header>', () => {
  it('should render the default markup', () => {
    const wrapper = shallow(
      <Header title="test" />
    );

    expect(wrapper).toHaveTagName('header');
    expect(wrapper.children().at(0)).toHaveTagName('h1');
    expect(wrapper.children().at(0)).toHaveText('test');
  });

  it('should render the default classes', () => {
    const wrapper = shallow(
      <Header title="test" />
    );

    expect(wrapper).toHaveClassName(styles.root);
    expect(wrapper.children().at(0)).toHaveClassName(styles.title);
  });

  it('should render the default markup [snapshot]', () => {
    const wrapper = shallow(
      <Header title="test" />
    );

    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});