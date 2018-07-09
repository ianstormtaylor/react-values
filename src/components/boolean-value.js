import React from 'react'

import AnyValue from './any-value'
import defaults from '../utils/defaults'
import render from '../utils/render'

const BooleanValue = props => (
  <AnyValue {...props} {...defaults(props, false)}>
    {value =>
      render(props, {
        ...value,
        toggle: () => value.set(v => !v),
      })
    }
  </AnyValue>
)

export default BooleanValue
