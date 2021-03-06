import React from 'react'
import styled from 'styled-components'
import { Motion, spring, presets } from 'react-motion'

import { ListItem } from './components/ListItem'

const Container = styled.div.attrs({
  className: 'pa4 sans-serif f6 list bg-black-30 relative'
})`
`

export function List({ list }) {
  return(
    <Container>
      <Motion defaultStyle={{param: 0}} style={{param: spring(1, presets.gentle)}}>
        {
          value => <div>
            {
              list.map(({ name, id }) => <ListItem
                param={value.param}
                key={id}
              >{name}</ListItem>
              )
            }
          </div>
        }
      </Motion>
    </Container>
  );
}
