import React, { Component } from 'react';
import { render } from 'react-dom';
import Gauge from './Gauge';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      gaugeValue: 50
    };

    this.handleGaugeChange = this.handleGaugeChange.bind(this);
  }

  handleGaugeChange(e) {
    this.setState({gaugeValue: e.target.value})
  }

  render() {
    return (
      <div>
        <Gauge value={this.state.gaugeValue} />
        <form>
          <div class="form-group">
            <input type="range" class="form-control-range" id="formControlRange" value={this.state.value} 
      onChange={this.handleGaugeChange}/>
          </div>
        </form>
        <p>
         D3 gauge https://wattenberger.com/blog/gauge
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
