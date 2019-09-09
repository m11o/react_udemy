import React, { Component } from 'react';

import Greeting from './greeting';

export default class App extends Component {
  render() {
    return (
      <div>
        <Greeting name="John" />
        <Greeting name="Bob" />
      </div>
    );
  }
}
