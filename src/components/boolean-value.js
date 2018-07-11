import AnyValue from './any-value'

class BooleanValue extends AnyValue {
  constructor(props, context) {
    super(props, context, false)
  }

  clear = () => {
    this.set(false)
  }

  toggle = () => {
    this.transform(v => !v)
  }

  transforms = ['set', 'reset', 'clear', 'toggle']
}

export default BooleanValue
