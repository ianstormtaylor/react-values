import React from 'react'

import AnyValue from './any-value'
import defaults from '../utils/defaults'
import proxy from '../utils/proxy'
import render from '../utils/render'

const SetValue = props => (
  <AnyValue {...props} {...defaults(props, new Set())}>
    {value =>
      render(props, {
        ...value,
        add: proxy(value, 'add'),
        remove: proxy(value, 'delete', true),
        delete: proxy(value, 'delete', true),
        clear: proxy(value, 'clear', true),
      })
    }
  </AnyValue>
)

export default SetValue
