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
        fill: proxy(value, 'fill'),
        filter: proxy(value, 'filter'),
        flat: proxy(value, 'flat'),
        flatMap: proxy(value, 'flatMap'),
        map: proxy(value, 'map'),
        reverse: proxy(value, 'reverse'),
        sort: proxy(value, 'sort'),
        slice: proxy(value, 'slice'),
        push: proxy(value, 'push', true),
        pop: proxy(value, 'pop', true),
        shift: proxy(value, 'shift', true),
        unshift: proxy(value, 'unshift', true),
        splice: proxy(value, 'splice', true),
      })
    }
  </AnyValue>
)

export default ArrayValue
