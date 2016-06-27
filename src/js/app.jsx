import React from 'react'
import ReactDOM from 'react-dom'
import Katex from 'katex'

import Header from './app/header.jsx'
import Tex from '../../khan_academy-components/js/tex.jsx'

export default class App extends React.Component {
  render() {
    return(
      <div className='container'>
        <Header />
        <div
          dangerouslySetInnerHTML={{
            __html: Katex.renderToString("c = \\pm\\sqrt{a^2 + b^2}")
          }}
            />
        <Tex>
          \nabla \cdot E = 4 \pi \rho
        </Tex>
      </div>
    );
  }
}
