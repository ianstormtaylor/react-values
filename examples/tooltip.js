import React from 'react'
import styled from 'react-emotion'
import { BooleanValue } from '..'

const TooltipExample = props => (
  <BooleanValue>
    {({ value, set }) => (
      <Target onMouseEnter={() => set(true)} onMouseLeave={() => set(false)}>
        Hover me...
        <Tooltip active={value}>Success!</Tooltip>
      </Target>
    )}
  </BooleanValue>
)

const Target = styled('div')`
  position: relative;
  padding: 10px;
  border: 2px dashed lightgray;
  border-radius: 5px;
`

const Tooltip = styled('div')`
  position: absolute;
  bottom: 100%;
  margin-bottom: 12px;
  left: 0;
  width: 100%;
  text-align: center;
  opacity: ${props => (props.active ? 1 : 0)};
  transition: all 0.25s;
  background-color: #222;
  color: white;
  border-radius: 3px;
  padding: 0.5em;
  font-size: 0.75em;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border: 5px solid transparent;
    border-bottom: none;
    border-top-color: #222;
  }
`

export default TooltipExample
