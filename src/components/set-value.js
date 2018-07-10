import React from 'react'

import AnyValue from './any-value'
import defaults from '../utils/defaults'
import proxy from '../utils/proxy'
import render from '../utils/render'

const SetValue = props => (
  <AnyValue {...props} {...defaults(props, new Set())}>
    {value => {
      const add = proxy(value, 'add')
      const remove = proxy(value, 'delete', true)
      const clear = proxy(value, 'clear', true)
      return render(props, {
        ...value,
        add,
        remove,
        delete: remove,
        clear,
        toggle: (val, boolean) => (boolean ? add(val) : remove(val)),
      })
    }}
  </AnyValue>
)

export default SetValue
