import createComponent from '../utils/create-component'
import createFactory from '../utils/create-factory'
import { Store } from './any'

class BooleanStore extends Store {
  constructor(value, props) {
    super(value, props, false)
    this.define('toggle', v => !v)
  }
}

const BooleanValue = createComponent(BooleanStore)
const createBooleanValue = createFactory(BooleanStore, BooleanValue)

export { BooleanValue, createBooleanValue, BooleanStore }
