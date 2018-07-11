import AnyValue from './any-value'

class SetValue extends AnyValue {
  constructor(...args) {
    super(...args, new Set())
  }

  clone(value) {
    return new Set(value)
  }

  add = this.proxy('add')
  remove = this.proxy('delete', true)
  delete = this.proxy('delete', true)
  clear = this.proxy('clear', true)

  toggle = (val, boolean) => {
    const method = boolean ? 'add' : 'remove'
    this[method](val)
  }

  transforms = ['set', 'reset', 'clear', 'add', 'remove', 'delete', 'toggle']
}

export default SetValue
