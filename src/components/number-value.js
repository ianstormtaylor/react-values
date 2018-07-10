import React from 'react'

import AnyValue from './any-value'
import defaults from '../utils/defaults'
import render from '../utils/render'

const NumberValue = props => (
  <AnyValue {...props} {...defaults(props, 0)}>
    {value =>
      render(props, {
        ...value,
        clear: () => value.set(0),
        increment: (n = 1) => value.set(v => v + n),
        decrement: (n = 1) => value.set(v => v - n),
      })
    }
  </AnyValue>
)

export default NumberValue
