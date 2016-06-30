import React from 'react';
import Meter from 'grommet/components/Meter'

export default class GrommetMeter extends React.Component {
  render() {
    return(
      <Meter type="spiral" series={[
        {"label": "Jikku", "value": 700, "colorIndex": "graph-1"},
        {"label": "Nikhil", "value": 1200, "colorIndex": "graph-2"},
        {"label": "Rakesh", "value": 500, "colorIndex": "graph-3"}
      ]} units="Qucentis" a11yTitleId="meter-title-18" a11yDescId="meter-desc-18" />
    );
  }
}
