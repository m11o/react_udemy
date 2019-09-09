import React, { Component } from 'react';

import Greeting from './greeting';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'John',
    };
  }

  handleChangeName(name) {
    this.setState({ name });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={e => this.handleChangeName(e.target.value)}
        />
        <button onClick={() => this.handleChangeName('Bob')}>I am Bob</button>
        <Greeting name={this.state.name} />
      </div>
    );
  }
}