import Store from './any'

export default class SetStore extends Store {
  constructor(value, props) {
    super(value, props, new Set())

    this.define(
      'toggle',
      (v, val, boolean) => {
        if (boolean) {
          return v.add(val)
        } else {
          v.delete(val)
          return v
        }
      },
      { mutates: true }
    )

    this.proxy('add')
    this.proxy('clear', { mutates: true })
    this.proxy('delete', { mutates: true })
    this.proxy('delete', { alias: 'remove', mutates: true })
  }

  clone(value) {
    return new Set(value)
  }
}
