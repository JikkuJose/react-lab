import React from 'react';
import ReactDOM from 'react'
import { Motion, spring, presets } from 'react-motion'
import { Scientist } from './Scientist'

export class AnimatedScientist extends React.Component {
  componentDidMount() {
  }

  render() {
    return(
      <Motion defaultStyle={{x: 0}} style={{x: spring(1, presets.gentle)}}>
        { value => <Scientist
          style={{opacity: value.x}}
          name={this.props.name}
        />
        }
      </Motion>
    );
  }
}
