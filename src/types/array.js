import createComponent from '../utils/create-component'
import createFactory from '../utils/create-factory'
import { Store } from './any'

class ArrayStore extends Store {
  constructor(value, props) {
    super(value, props, [])

    this.compute('first', v => v[0])
    this.compute('last', v => v[Math.max(0, v.length - 1)])

    this.proxy('concat')
    this.proxy('fill', { mutates: true })
    this.proxy('filter')
    this.proxy('flat')
    this.proxy('flatMap')
    this.proxy('map')
    this.proxy('pop', { mutates: true })
    this.proxy('push', { mutates: true })
    this.proxy('reverse', { mutates: true })
    this.proxy('shift', { mutates: true })
    this.proxy('slice')
    this.proxy('sort', { mutates: true })
    this.proxy('splice', { mutates: true })
    this.proxy('unshift', { mutates: true })
  }

  clone(value) {
    return value.slice()
  }
}

const ArrayValue = createComponent(ArrayStore)
const createArrayValue = createFactory(ArrayStore, ArrayValue)

export { ArrayValue, createArrayValue, ArrayStore }
