import React from 'react'

class AnyValue extends React.Component {
  constructor(props, context, empty) {
    super(props)
    const controlled = props.value !== undefined
    let initial = empty
    if (props.defaultValue !== undefined) initial = props.defaultValue
    if (props.value !== undefined) initial = props.value

    this.state = { controlled, value: initial }
    this.transforms = {}
    this.computeds = {}

    this.define('set', (v, next) => next)
    this.define('reset', () => this.clone(initial))
    this.define('clear', () => this.clone(empty))
  }

  get value() {
    const { state, props } = this
    return state.controlled ? props.value : state.value
  }

  clone(value) {
    return value
  }

  transform(fn, options) {
    const { value, onChange } = this.props

    if (this.state.controlled) {
      const next = this.apply(value, fn, options)
      if (onChange) onChange(next)
    } else {
      this.setState(
        existing => {
          const next = this.apply(existing.value, fn, options)
          return { value: next }
        },
        () => {
          if (onChange) onChange(this.state.value)
        }
      )
    }
  }

  apply(value, fn, options = {}) {
    const { mutates = false } = options
    const current = mutates ? this.clone(value) : value
    const next = typeof fn === 'function' ? fn(current) : fn
    return next
  }

  define(name, fn, options) {
    this.transforms[name] = (...args) => {
      this.transform(v => fn(v, ...args), options)
    }
  }

  compute(name, fn) {
    this.computeds[name] = () => fn(this.value)
  }

  proxy(method, options = {}) {
    const { alias = method, mutates = false } = options

    this.define(
      alias,
      (v, ...args) => {
        const ret = v[method](...args)
        return mutates ? v : ret
      },
      options
    )
  }

  render() {
    const { props, transforms, computeds, value } = this
    const { children, render } = props
    const fn = children || render
    if (fn === null) return null

    const renderProps = { value, ...transforms }

    for (const key in computeds) {
      renderProps[key] = computeds[key]()
    }

    const ret = typeof fn === 'function' ? fn(renderProps) : fn
    return ret
  }
}

export default AnyValue
