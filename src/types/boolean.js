import Store from './any'

export default class BooleanStore extends Store {
  constructor(value, props) {
    super(value, props, false)
    this.define('toggle', v => !v)
  }
}
