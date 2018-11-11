import createComponent from '../utils/create-component'
import createFactory from '../utils/create-factory'

class Store {
  constructor(value, props = {}, empty) {
    this.callbacks = []
    this.value = value === undefined ? empty : value
    this.transforms = {}
    this.noops = {}
    this.computeds = {}
    this.props = props

    this.define('set', (v, next) => next)
    this.define('reset', () => this.clone(value))
    this.define('clear', () => this.clone(empty))

    if (props.onChange) {
      this.on(props.onChange)
    }
  }

  on(callback) {
    const index = this.callbacks.push(callback) - 1
    const off = () => (this.callbacks[index] = null)
    return off
  }

  clone(v) {
    return v
  }

  transform(fn, options = {}) {
    const { value, callbacks } = this
    const { mutates = false } = options
    const current = mutates ? this.clone(value) : value
    const next = typeof fn === 'function' ? fn(current) : fn
    this.value = next
    callbacks.forEach(cb => cb && cb(next))
  }

  define(name, fn, options) {
    this.noops[name] = () => {}

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
}

const Value = createComponent(Store)
const createValue = createFactory(Store, Value)

export { Value, createValue, Store }
