import Store from './any'

export default class NumberStore extends Store {
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
