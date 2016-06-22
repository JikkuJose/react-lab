import React from 'react'
import ReactDOM from 'react-dom'

import Header from './app/header.jsx'
import Paragraph from './app/para.jsx'

export default class App extends React.Component {
  render() {
    return(
      <div className='container'>
        <Header />
      </div>
    );
  }
}
