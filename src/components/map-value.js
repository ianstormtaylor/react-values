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
        set: (...args) => {
          return args.length === 1
            ? value.set(...args)
            : value.set(v => v.set(...args))
        },
        unset: proxy(value, 'delete', true),
        delete: proxy(value, 'delete', true),
        clear: proxy(value, 'clear', true),
      })
    }
  </AnyValue>
)

export default MapValue
