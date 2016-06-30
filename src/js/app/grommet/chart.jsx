import React from 'react';
import Chart from 'grommet/components/Chart'

export default class GrommetComponent extends React.Component {
  render() {
    return(
      <Chart series={[{
        "values": [
          [8, 1],
          [7, 2],
          [6, 3],
          [5, 2],
          [4, 3],
          [3, 3],
          [2, 2],
          [1, 4]
        ],
        "colorIndex": "graph-1"
      }]}
      max={5}
      threshold={3}
      a11yTitleId="lineChartTitle"
      a11yDescId="lineChartDesc" />
    );
  }
}
