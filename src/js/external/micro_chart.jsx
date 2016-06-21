import React from 'react';
import MicroChart from 'react-micro-bar-chart';

export default class MicroChartWrapper extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [2, 4, 0, 4, 1],
      name: 'Jikku'
    }
  }

  randomize() {
    this.setState({
      data: this.state.data.map(function(i) { return i + 2; }),
      name: 'Jikku'
    });
    console.log(this.state);
  }

  microChart(d) {
    let mc = <MicroChart data={d} />;
    return mc;
  }

  render() {
    return(
      <div>
        {this.microChart(this.state.data)}
         <br />
         <p>{this.state.name}</p>
         <p>{this.state.data.map(function(i) { return i + 2; })}</p>
        <button onClick={this.randomize.bind(this)}>Random</button>
      </div>
    );
  }
}
