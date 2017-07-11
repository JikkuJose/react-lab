import React from 'react'
import styled from 'styled-components'
import { Button } from './components/Button'

const Container = styled.div.attrs({
  className: 'flex pa2'
})``

export function Controls({ toggleList }) {
  return(
    <Container>
      <Button
        handleClick={toggleList}
      >Toggle</Button>
    </Container>
  );
}
