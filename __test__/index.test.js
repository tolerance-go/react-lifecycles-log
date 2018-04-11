/* global test, expect, afterEach */
import React from 'react';
import LifeHOC from '../src/index.js';
import renderer from 'react-test-renderer';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('console', () => {
  class T extends React.Component {
    constructor(props) {
      super(props);
      console.log('child.constructor');
      this.state = {};
    }

    static getDerivedStateFromProps(nextProps, prevState) {
      console.log('child.getDerivedStateFromProps', ...arguments);
      return null;
    }

    componentDidMount() {
      console.log('child.componentDidMount', ...arguments);
    }

    componentDidUpdate() {
      console.log('child.componentDidUpdate', ...arguments);
    }

    componentDidCatch() {
      console.log('child.componentDidCatch', ...arguments);
    }

    componentWillUnmount() {
      console.log('child.componentWillUnmount', ...arguments);
    }

    shouldComponentUpdate() {
      console.log('child.shouldComponentUpdate', ...arguments);
      return true;
    }

    render() {
      console.log('child.render', ...arguments);
      return null;
    }
  }

  const W = LifeHOC(T);
  const $dom = mount(<W />);
  $dom.setProps({ newProps: 'newProps' });
  $dom.unmount();

  console.log('-------------- closed ------------------');

  const W2 = LifeHOC(T, true);
  const $dom2 = mount(<W2 />);
});
