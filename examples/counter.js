import React from 'react'
import styled from 'react-emotion'
import { NumberValue } from '..'
import { Button } from './support/components'

const CounterExample = props => (
  <NumberValue defaultValue={42} min={0} max={100}>
    {({ value, increment, decrement }) => (
      <Container>
        <Button icon="first_page" onClick={() => decrement(10)} />
        <Button icon="keyboard_arrow_left" onClick={decrement} />
        <Counter>{value}</Counter>
        <Button icon="keyboard_arrow_right" onClick={increment} />
        <Button icon="last_page" onClick={() => increment(10)} />
      </Container>
    )}
  </NumberValue>
)

const Container = styled('div')`
  display: flex;
`

const Counter = styled('div')`
  font-size: 2em;
  margin: 0 10px;
`

export default CounterExample
