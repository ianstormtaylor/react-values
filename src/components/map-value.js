import React from 'react'

import AnyValue from './any-value'
import defaults from '../utils/defaults'
import proxy from '../utils/proxy'
import render from '../utils/render'

const MapValue = props => (
  <AnyValue {...props} {...defaults(props, new Map())}>
    {value =>
      render(props, {
        ...value,
        set: (key, val) => {
          return arguments.length === 2
            ? value.set(v => v.set(key, val))
            : value.set(key)
        },
        unset: proxy(value, 'delete', true),
        delete: proxy(value, 'delete', true),
        clear: proxy(value, 'clear', true),
      })
    }
  </AnyValue>
)

export default MapValue
