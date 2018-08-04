import createComponent from '../utils/create-component'
import createFactory from '../utils/create-factory'
import { Store } from './any'

class ObjectStore extends Store {
  constructor(value, props) {
    super(value, props, {})

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

const ObjectValue = createComponent(ObjectStore)
const createObjectValue = createFactory(ObjectStore, ObjectValue)

export { ObjectValue, createObjectValue, ObjectStore }
