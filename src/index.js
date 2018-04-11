import React from 'react';

const LifeHOC = (wrappedComponent, closed) => {
  if (closed) return wrappedComponent;

  let count = 1;
  const conlog = (...msg) => console.log(wrappedComponent.name, '->', ...msg);

  return class LifeComponent extends React.Component {
    constructor(props) { 
      super(props);
      this.state = {};
      conlog('constructor', ...arguments);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
      conlog('getDerivedStateFromProps', ...arguments);
      return null;
    }

    componentDidMount() {
      conlog('componentDidMount', ...arguments);
    }

    componentDidUpdate() {
      conlog('componentDidUpdate', ...arguments);
    }

    componentDidCatch() {
      conlog('componentDidCatch', ...arguments);
    }

    // UNSAFE_componentWillMount() {
    //   conlog('UNSAFE_componentWillMount', ...arguments);
    // }

    // UNSAFE_componentWillUpdate() {
    //   conlog('UNSAFE_componentWillUpdate', ...arguments);
    // }

    // UNSAFE_componentWillReceiveProps() {
    //   conlog('UNSAFE_componentWillReceiveProps', ...arguments);
    // }

    componentWillUnmount() {
      conlog('componentWillUnmount', ...arguments);
    }

    shouldComponentUpdate() {
      conlog('shouldComponentUpdate', ...arguments);
      return true;
    }

    render() {
      conlog(`render[${count++}]`, ...arguments);
      return React.createElement(wrappedComponent, this.props);
    }
  };
};

export default LifeHOC;
