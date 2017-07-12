import React from 'react'
import styled from 'styled-components'

export const ListItem = styled.li.attrs({
  className: 'list pa2 bg-black-30 mb2 br1 w5',
})`
  opacity: ${props => props.param || 1};
`

export class Scientist extends React.Component {
  render() {
    return(
      <ListItem
        {...this.props}
      >{this.props.children}</ListItem>
    );
  }
}
