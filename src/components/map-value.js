import AnyValue from './any-value'

class MapValue extends AnyValue {
  constructor(...args) {
    super(...args, new Map())
  }

  clone(value) {
    return new Map(value)
  }

  set = (...args) => {
    const first = args[0]
    return args.length === 1
      ? this.transform(v => (typeof first === 'function' ? first(v) : first))
      : this.transform(v => v.set(...args))
  }

  unset = this.proxy('delete', true)
  delete = this.proxy('delete', true)
  clear = this.proxy('clear', true)

  transforms = ['set', 'reset', 'clear', 'unset', 'delete', 'clear']
}

export default MapValue
