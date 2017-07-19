import React from 'react'

import { View } from './components/View'

import { scientists as scientistsSample } from 'data'

export class App extends React.Component {
  state = {
    showList: true,
    scientists: scientistsSample
  }

  toggleList = () => {
    this.setState(s => ({showList: !s.showList}))
  }

  render() {
    const { showList, scientists } = this.state

    return(
      <View
        showList={showList}
        toggleList={this.toggleList}
        scientists={scientists}
      />
    );
  }
}
