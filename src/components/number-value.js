import AnyValue from './any-value'

class NumberValue extends AnyValue {
  constructor(...args) {
    super(...args, 0)
    this.define('increment', (v, n = 1) => v + n)
    this.define('decrement', (v, n = 1) => v - n)
  }
}

export default NumberValue
