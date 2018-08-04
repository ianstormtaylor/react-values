import createComponent from '../utils/create-component'
import createFactory from '../utils/create-factory'
import { Store } from './any'

class StringStore extends Store {
  constructor(value, props) {
    super(value, props, '')
    this.proxy('concat')
    this.proxy('normalize')
    this.proxy('padEnd')
    this.proxy('padStart')
    this.proxy('repeat')
    this.proxy('replace')
    this.proxy('slice')
    this.proxy('substr')
    this.proxy('substring')
    this.proxy('toLowerCase')
    this.proxy('toUpperCase')
    this.proxy('trim')
    this.proxy('trimEnd')
    this.proxy('trimStart')
  }
}

const StringValue = createComponent(StringStore)
const createStringValue = createFactory(StringStore, StringValue)

export { StringValue, createStringValue, StringStore }
