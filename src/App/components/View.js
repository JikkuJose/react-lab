import React from 'react'
import styled from 'styled-components'

import { List } from './List'
import { Controls } from './Controls'

const Header = styled.div.attrs({
  className: 'pa3 white bg-black-80 sans-serif mv0'
})``

export function View({ toggleList, showList, scientists }) {
  return(
    <div>
      <Header>React Lab</Header>
      <Controls
        toggleList={toggleList}
      />
      {showList && <List list={scientists} />}
    </div>
  );
}
