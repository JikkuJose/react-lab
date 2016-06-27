import React from 'react'
import ReactDOM from 'react-dom'

import Header from './app/header.jsx'
import CalendarHeatmap from 'react-calendar-heatmap'

export default class App extends React.Component {
  render() {
    return(
      <div className='container'>
        <Header />
        <CalendarHeatmap
          endDate={new Date('2016-04-01')}
          numDays={300}
          values={[
            { date: '2016-01-01' },
            { date: '2016-01-22' },
            { date: '2016-01-30' },
          ]}
        />
      </div>
    );
  }
}
