import React from 'react'
import styled from 'react-emotion'
import { SetValue } from '..'

const FRUIT = [
  'chocolate',
  'honeydew',
  'lime',
  'olive',
  'orange',
  'plum',
  'salmon',
  'tomato',
  'wheat',
]

const CheckboxSetExample = props => (
  <SetValue defaultValue={new Set(['olive', 'tomato', 'plum'])}>
    {({ value, add, remove }) => (
      <Container>
        <List>
          {FRUIT.map((fruit, i) => (
            <div key={i} color={fruit}>
              <Checkbox
                type="checkbox"
                checked={value.has(fruit)}
                onChange={e => (e.target.checked ? add(fruit) : remove(fruit))}
              />{' '}
              {fruit}
            </div>
          ))}
        </List>
        <PillList>
          {Array.from(value).map((color, i) => (
            <Pill key={i} color={color}>
              {color}
            </Pill>
          ))}
        </PillList>
      </Container>
    )}
  </SetValue>
)

const Container = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const List = styled('div')`
  padding: 20px;

  & > * + * {
    margin-top: 5px;
  }
`

const Checkbox = styled('input')`
  display: inline-block;
  vertical-align: middle;
`

const PillList = styled('div')`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;

  margin: -5px;

  & > * {
    margin: 5px;
  }
`

const Pill = styled('div')`
  display: inline-block;
  background: ${props => props.color};
  padding: 0.333em 0.5em;
  color: #555;
  border-radius: 4px;
`

export default CheckboxSetExample
