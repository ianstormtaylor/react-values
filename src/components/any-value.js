import React from 'react'

import render from '../utils/render'

class AnyValue extends React.Component {
  constructor(props, context, empty) {
    super(props)
    let initial = empty
    if (props.defaultValue !== undefined) initial = props.defaultValue
    if (props.value !== undefined) initial = props.value
    const controlled = props.value !== undefined
    this.state = { controlled, empty, initial, value: initial }
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

  proxy(method, mutates) {
    return (...args) => {
      this.transform(v => {
        const ret = v[method](...args)
        return mutates ? v : ret
      })
    }
  }

  set = next => {
    this.transform(v => (typeof next === 'function' ? next(v) : next))
  }

  reset = () => {
    this.transform(() => this.state.initial)
  }

  clear = () => {
    this.transform(() => this.state.empty)
  }

  states = ['value']
  transforms = ['set', 'reset', 'clear']

  render() {
    const obj = {}
    this.states.forEach(state => (obj[state] = this[state]))
    this.transforms.forEach(transform => (obj[transform] = this[transform]))
    return render(this.props, obj)
  }
}

export default AnyValue
