import createComponent from '../utils/create-component'
import createFactory from '../utils/create-factory'
import { Store } from './any'

class SetStore extends Store {
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

const SetValue = createComponent(SetStore)
const createSetValue = createFactory(SetStore, SetValue)

export { SetValue, createSetValue, SetStore }
