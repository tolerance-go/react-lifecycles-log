# react-lifecycles-log
[![NPM version](https://img.shields.io/npm/v/react-lifecycles-log.svg?style=flat)](https://npmjs.org/package/react-lifecycles-log)
[![Build Status](https://travis-ci.org/tolerance-go/react-lifecycles-log.svg?branch=master)](https://travis-ci.org/tolerance-go/react-lifecycles-log)
[![Coverage Status](https://coveralls.io/repos/github/tolerance-go/react-lifecycles-log/badge.svg?branch=master)](https://coveralls.io/github/tolerance-go/react-lifecycles-log?branch=master)
[![NPM downloads](http://img.shields.io/npm/dm/react-lifecycles-log.svg?style=flat)](https://npmjs.org/package/react-lifecycles-log)
[![Dependencies Status](https://david-dm.org/tolerance-go/react-lifecycles-log/status.svg)](https://david-dm.org/tolerance-go/react-lifecycles-log)

Quickly debug the life cycle of the react component. 

*"peerDependencies": { "react": "^16.3.1" }*

# Install
```zsh
npm install react-lifecycles-log -D
```

# Usage
```js
import React from 'react';
import LifeHOC from 'react-lifecycles-log';

@LifeHOC
export defalut class C extends React.Component {
    ...
}

// or

LifeHOC(C)
```

# Test
[check it out](https://github.com/tolerance-go/react-lifecycles-log/blob/master/__test__/index.test.js)

```bash
  T -> constructor {} {}

  T -> getDerivedStateFromProps {} {}

  T -> render[1]

  child.constructor

  child.getDerivedStateFromProps {} {}

  child.render

  child.componentDidMount

  T -> componentDidMount

  T -> getDerivedStateFromProps { newProps: 'newProps' } {}

  T -> shouldComponentUpdate { newProps: 'newProps' } {} {}

  T -> render[2]

  child.getDerivedStateFromProps { newProps: 'newProps' } {}

  child.shouldComponentUpdate { newProps: 'newProps' } {} {}

  child.render

  child.componentDidUpdate {} {} undefined

  T -> componentDidUpdate {} {} undefined

  T -> componentWillUnmount

  child.componentWillUnmount

  -------------- closed ------------------

  child.constructor

  child.getDerivedStateFromProps {} {}

  child.render

  child.componentDidMount
```

# License
MIT
