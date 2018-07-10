import React from 'react'
import styled from 'react-emotion'
import COLOR_NAMES from 'css-color-names'
import { StringValue } from '..'

const FilteringExample = props => (
  <StringValue>
    {({ value, set }) => (
      <Container>
        <Input
          type="text"
          placeholder="Filter colors..."
          value={value}
          onChange={e => set(e.target.value)}
        />
        <List>
          {Object.keys(COLOR_NAMES)
            .filter(n => n.includes(value))
            .slice(0, 42)
            .map((name, i) => (
              <Item key={i} color={name}>
                {name}
              </Item>
            ))}
        </List>
      </Container>
    )}
  </StringValue>
)

const Container = styled('div')`
  position: relative;
  width: 100%;
  height: 100%;
`

const Input = styled('input')`
  appearance: none;
  width: 100%;
  border: 1px solid #ddd;
  padding: 0.5em;
  border-radius: 4px;
  margin-bottom: 10px;
  font-size: 14px;

  &:focus {
    outline: none;
    border: 1px solid dodgerblue;
  }
`

const List = styled('div')`
  max-width: 30em;
  display: flex;
  flex-wrap: wrap;

  margin: -5px;

  & > * {
    margin: 5px;
  }
`

const Item = styled('div')`
  display: inline-block;
  background: ${props => props.color};
  padding: 0.333em 0.5em;
  color: #555;
  border-radius: 4px;
`

export default FilteringExample
