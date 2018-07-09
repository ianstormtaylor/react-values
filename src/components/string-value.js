import React from 'react'

import AnyValue from './any-value'
import defaults from '../utils/defaults'
import proxy from '../utils/proxy'
import render from '../utils/render'

const ArrayValue = props => (
  <AnyValue {...props} {...defaults(props, [])}>
    {value =>
      render(props, {
        ...value,
        concat: proxy(value, 'concat'),
        padEnd: proxy(value, 'padEnd'),
        padStart: proxy(value, 'padStart'),
        repeat: proxy(value, 'repeat'),
        replace: proxy(value, 'replace'),
        slice: proxy(value, 'slice'),
        substr: proxy(value, 'substr'),
        substring: proxy(value, 'substring'),
        toLowerCase: proxy(value, 'toLowerCase'),
        toUpperCase: proxy(value, 'toUpperCase'),
        trim: proxy(value, 'trim'),
        trimEnd: proxy(value, 'trimEnd'),
        trimStart: proxy(value, 'trimStart'),
      })
    }
  </AnyValue>
)

export default ArrayValue
