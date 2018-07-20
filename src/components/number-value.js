import AnyValue from './any-value'

class NumberValue extends AnyValue {
  static defaultProps = {
    max: Number.MAX_SAFE_INTEGER,
    min: Number.MIN_SAFE_INTEGER,
  }
  constructor(props, ...rest) {
    super(props, ...rest, 0)
    const { max, min } = props

    this.define('increment', (v, n = 1) => {
      const num = typeof n !== 'number' ? 1 : n
      return Math.min(v + num, max)
    })

    this.define('decrement', (v, n = 1) => {
      const num = typeof n !== 'number' ? 1 : n
      return Math.max(v - num, min)
    })
  }
}

export default NumberValue
