import React from 'react'
import ReactDOM from 'react-dom'

import Header from './app/header.jsx'
import Paragraph from './app/para.jsx'

export default class App extends React.Component {
  para() {
    let paragraph = new Paragraph();
    console.log(paragraph.text());
    return(2);
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
