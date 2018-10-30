import Store from './any'

export default class StringStore extends Store {
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
