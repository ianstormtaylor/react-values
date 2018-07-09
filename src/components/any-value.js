import React from 'react'

import defaults from '../utils/defaults'
import render from '../utils/render'

class AnyValue extends React.Component {
  constructor(props) {
    super(props)
    const initial = defaults(props)
    const controlled = props.value !== undefined
    this.state = { controlled, initial, value: initial }
  }

  transform = fn => {
    this.setState(
      existing => {
        const next = fn(existing.value)
        return { value: next }
      },
      () => {
        const { onChange } = this.props
        if (onChange) onChange(this.state.value)
      }
    )
  }

  set = next => {
    if (typeof next === 'function') next = next(this.state.value)
    this.transform(() => next)
  }

  reset = () => {
    this.transform(() => this.state.initial)
  }

  render() {
    const { set, reset, props, state } = this
    const value = state.controlled ? props.value : state.value
    const ret = render(props, { value, set, reset })
    return ret
  }
}

export default AnyValue
