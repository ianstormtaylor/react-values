import AnyValue from './any-value'

class ArrayValue extends AnyValue {
  constructor(...args) {
    super(...args, [])
  }

  get first() {
    return this.value[0]
  }

  get last() {
    return this.value[Math.max(0, this.value.length - 1)]
  }

  concat = this.proxy('concat')
  fill = this.proxy('fill')
  filter = this.proxy('filter')
  flat = this.proxy('flat')
  flatMap = this.proxy('flatMap')
  map = this.proxy('map')
  reverse = this.proxy('reverse')
  sort = this.proxy('sort')
  slice = this.proxy('slice')
  push = this.proxy('push', true)
  pop = this.proxy('pop', true)
  shift = this.proxy('shift', true)
  unshift = this.proxy('unshift', true)
  splice = this.proxy('splice', true)

  states = ['value', 'first', 'last']
  transforms = [
    'set',
    'reset',
    'clear',
    'concat',
    'fill',
    'filter',
    'flat',
    'flatMap',
    'map',
    'reverse',
    'sort',
    'slice',
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
  ]
}

export default ArrayValue
