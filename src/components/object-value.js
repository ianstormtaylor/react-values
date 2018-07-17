import AnyValue from './any-value'

class ObjectValue extends AnyValue {
  constructor(...args) {
    super(...args, {})

    this.define('set', (v, ...a) => {
      const first = a[0]

      if (a.length === 1) {
        return typeof first === 'function' ? first(v) : first
      }

      const [key, val] = a
      const clone = { ...v }
      clone[key] = val
      return clone
    })

    this.define('assign', (v, val = {}) => ({ ...v, ...val }))
    this.define('clear', () => ({}))
    this.define('delete', unset)
    this.define('unset', unset)
  }

  clone(value) {
    return { ...value }
  }
}

function unset(v, key) {
  const clone = { ...v }
  delete clone[key]
  return clone
}

export default ObjectValue
