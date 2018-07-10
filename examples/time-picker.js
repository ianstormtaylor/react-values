import React from 'react'
import styled from 'react-emotion'
import { DateValue } from '..'
import { Button } from './support/components'

const TimePickerExample = props => (
  <DateValue>
    {({
      value,
      hours,
      minutes,
      incrementHours,
      decrementHours,
      incrementMinutes,
      decrementMinutes,
    }) => (
      <Container>
        <Column>
          <Button icon="keyboard_arrow_up" onClick={() => incrementHours()} />
          <Text>{hours === 0 ? 12 : hours > 12 ? hours - 12 : hours}</Text>
          <Button icon="keyboard_arrow_down" onClick={() => decrementHours()} />
        </Column>
        <Column>
          <Text>:</Text>
        </Column>
        <Column>
          <Button icon="keyboard_arrow_up" onClick={() => incrementMinutes()} />
          <Text>{minutes < 10 ? `0${minutes}` : minutes}</Text>
          <Button
            icon="keyboard_arrow_down"
            onClick={() => decrementMinutes()}
          />
        </Column>
        <Column>
          <Button
            icon="keyboard_arrow_up"
            onClick={() => incrementHours(hours < 12 ? 12 : -12)}
          />
          <Text>{hours < 12 ? 'AM' : 'PM'}</Text>
          <Button
            icon="keyboard_arrow_down"
            onClick={() => incrementHours(hours < 12 ? 12 : -12)}
          />
        </Column>
      </Container>
    )}
  </DateValue>
)

const Container = styled('div')`
  display: flex;
  align-items: center;
`

const Column = styled('div')`
  display: flex;
  flex-direction: column;
`

const Text = styled('div')`
  font-size: 1.5em;
  margin: 0 8px;
`

export default TimePickerExample
