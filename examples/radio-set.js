import React from 'react'
import styled from 'react-emotion'
import { SetValue } from '..'

const CHOICES = ['Yes', 'No', 'Maybe']

const RadioSetExample = props => (
  <SetValue defaultValue={new Set(['No'])}>
    {({ value, add, clear }) => (
      <Container>
        <List>
          {CHOICES.map((choice, i) => (
            <Item key={i}>
              <Radio
                type="radio"
                checked={value.has(choice)}
                onChange={e => e.target.checked && (clear(), add(choice))}
              />
              {choice}
            </Item>
          ))}
        </List>
        <RadioList>
          {Array.from(value).map((item, i) => (
            <ListItem key={i} color={item}>
              {item}
            </ListItem>
          ))}
        </RadioList>
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
  columns: 3;
  column-gap: 20px;

  & > * + * {
    margin-top: 5px;
  }
`

const Item = styled('div')`
  whitespace: no-wrap;
`

const Radio = styled('input')`
  display: inline-block;
  vertical-align: middle;
`

const RadioList = styled('div')`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;

  margin: -5px;

  & > * {
    margin: 5px;
  }
`

const ListItem = styled('div')`
  display: inline-block;
  background: #969ba0;
  padding: 0.333em 0.5em;
  color: #000;
  border-radius: 4px;
`

export default RadioSetExample
