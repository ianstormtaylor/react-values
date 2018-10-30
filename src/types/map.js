import Store from './any'

export default class MapStore extends Store {
  constructor(value, props) {
    super(value, props, new Map())

    this.define('set', (v, ...a) => {
      const first = a[0]
      return a.length === 1
        ? typeof first === 'function' ? first(v) : first
        : v.set(...a)
    })

    this.proxy('clear', { mutates: true })
    this.proxy('delete', { mutates: true })
    this.proxy('delete', { alias: 'unset', mutates: true })
  }

  clone(value) {
    return new Map(value)
  }
}
