import createComponent from '../utils/create-component'
import createFactory from '../utils/create-factory'
import { Store } from './any'

class NumberStore extends Store {
  constructor(value, props) {
    super(value, props, 0)

    this.define('increment', (v, n = 1) => {
      const num = typeof n !== 'number' ? 1 : n
      return Math.min(v + num, this.props.max)
    })

    this.define('decrement', (v, n = 1) => {
      const num = typeof n !== 'number' ? 1 : n
      return Math.max(v - num, this.props.min)
    })
  }
}

const NumberValue = createComponent(NumberStore)
const createNumberValue = createFactory(NumberStore, NumberValue)

NumberValue.defaultProps = {
  max: Number.MAX_SAFE_INTEGER,
  min: Number.MIN_SAFE_INTEGER,
}

export { NumberValue, createNumberValue, NumberStore }
