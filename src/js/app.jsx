import React from 'react'
import ReactDOM from 'react-dom'

import Header from './app/header.jsx'
import GrommetChart from './app/grommet/chart.jsx'
import GrommetMeter from './app/grommet/meter.jsx'
import GComponent from './app/grommet/component.jsx'

export default class App extends React.Component {
  render() {
    return(
      <div className='container'>
        <Header />
        <GComponent />
      </div>
    );
  }
}
