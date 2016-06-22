import React from 'react'
import ReactDOM from 'react-dom'

import Header from './app/header.jsx'
import Paragraph from './app/para.rb'

export default class App extends React.Component {
  para() {
    let t = Opal.Paragraph.$new().$text();
    console.log(t);
    return(t);
  }

  render() {
    return(
      <div className='container'>
        <Header />
        <p>{this.para()}</p>
      </div>
    );
  }
}
