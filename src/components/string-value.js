import AnyValue from './any-value'

class StringValue extends AnyValue {
  constructor(...args) {
    super(...args, '')
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

export default StringValue
