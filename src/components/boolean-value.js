import AnyValue from './any-value'

class BooleanValue extends AnyValue {
  constructor(...args) {
    super(...args, false)
    this.define('toggle', v => !v)
  }
}

export default BooleanValue
