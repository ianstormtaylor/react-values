import AnyValue from './any-value'

class NumberValue extends AnyValue {
  constructor(...args) {
    super(...args, 0)
  }

  increment = (n = 1) => {
    this.transform(v => v + n)
  }

  decrement = (n = 1) => {
    this.transform(v => v - n)
  }

  transforms = ['set', 'reset', 'clear', 'increment', 'decrement']
}

export default NumberValue
