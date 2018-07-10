import React from 'react'
import styled from 'react-emotion'
import { BooleanValue } from '..'

const Toggle = props => (
  <BooleanValue {...props}>
    {({ value, toggle }) => (
      <Track on={value} onClick={toggle}>
        <Thumb on={value} />
      </Track>
    )}
  </BooleanValue>
)

class ReusableToggleExample extends React.Component {
  state = {
    on: false,
  }

  render() {
    return (
      <Toggle
        value={this.state.on}
        onChange={value => this.setState({ on: value })}
      />
    )
  }
}

const Track = styled('div')`
  position: relative;
  height: 25px;
  width: 50px;
  background-color: ${props => (props.on ? 'dodgerblue' : 'lightgray')};
  border-radius: 999px;
  cursor: pointer;
`

const Thumb = styled('div')`
  position: absolute;
  transition: all 0.25s;
  height: 23px;
  width: 23px;
  top: 1px;
  left: ${props => (props.on ? '26px' : '1px')};
  background-color: white;
  border-radius: 999px;
  cursor: pointer;
`

export default ReusableToggleExample
