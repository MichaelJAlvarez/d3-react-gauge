import React, { Component } from 'react';
import { render } from 'react-dom';
import Gauge from './Gauge';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Gauge />
        <p>
         D3 gauge from tutorial https://wattenberger.com/blog/gauge
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
