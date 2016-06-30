import React from 'react'
import ReactDOM from 'react-dom'

import Header from './app/header.jsx'
import B from './app/rs/component.jsx'

export default class App extends React.Component {
  render() {
    return(
      <div className='container'>
        <Header />
        <B />
      </div>
    );
  }
}
