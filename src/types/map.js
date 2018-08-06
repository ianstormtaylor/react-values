import createComponent from '../utils/create-component'
import createFactory from '../utils/create-factory'
import { Store } from './any'

class MapStore extends Store {
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

const MapValue = createComponent(MapStore)
const createMapValue = createFactory(MapStore, MapValue)

export { MapValue, createMapValue, MapStore }
