import React from 'react'
import { List } from './components/List'
import { Controls } from './components/Controls'

const scientists = [
  {name: 'Tesla', id: '5d55d'},
  {name: 'Edison', id: '5y554'},
  {name: 'Nakamoto', id: '8d551'},
]

export class App extends React.Component {
  state = {
    showList: true
  }

  toggleList = () => {
    this.setState(s => ({showList: !s.showList}))
  }

  render() {
    const { showList } = this.state

    return(
      <div>
        <p className="pa3 white bg-black-80 sans-serif mv0">Scientists!</p>
        <Controls
          toggleList={this.toggleList}
        />
        {showList && <List scientists={scientists} />}
      </div>
    );
  }
}
