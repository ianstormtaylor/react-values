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

  get value() {
    const { state, props } = this
    return state.controlled ? props.value : state.value
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
    this.transform(v => (typeof next === 'function' ? next(v) : next))
  }

  reset = () => {
    this.transform(() => this.state.initial)
  }

  render() {
    const { set, reset, props, value } = this
    return render(props, { value, set, reset })
  }
}

export default AnyValue
