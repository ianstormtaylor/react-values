import React from 'react'
import styled from 'react-emotion'
import { createNumberValue } from '..'
import { Button } from './support/components'

const ConnectedNumberValue = createNumberValue(42, { min: 0, max: 100 })

const ConnectedCounterExample = props => (
  <Wrapper>
    <Counter />
    <Counter />
  </Wrapper>
)

const Counter = props => (
  <ConnectedNumberValue>
    {({ value, increment, decrement }) => (
      <Container>
        <Button icon="first_page" onClick={() => decrement(10)} />
        <Button icon="keyboard_arrow_left" onClick={decrement} />
        <Count>{value}</Count>
        <Button icon="keyboard_arrow_right" onClick={increment} />
        <Button icon="last_page" onClick={() => increment(10)} />
      </Container>
    )}
  </ConnectedNumberValue>
)

const Wrapper = styled('div')`
  & > * > * {
    margin-top: 30px;
  }
`

const Container = styled('div')`
  display: flex;
`

const Count = styled('div')`
  font-size: 2em;
  margin: 0 10px;
`

export default ConnectedCounterExample
