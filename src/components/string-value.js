import AnyValue from './any-value'

class StringValue extends AnyValue {
  constructor(...args) {
    super(...args, '')
  }

  concat = this.proxy('concat')
  normalize = this.proxy('normalize')
  padEnd = this.proxy('padEnd')
  padStart = this.proxy('padStart')
  repeat = this.proxy('repeat')
  replace = this.proxy('replace')
  slice = this.proxy('slice')
  substr = this.proxy('substr')
  substring = this.proxy('substring')
  toLowerCase = this.proxy('toLowerCase')
  toUpperCase = this.proxy('toUpperCase')
  trim = this.proxy('trim')
  trimEnd = this.proxy('trimEnd')
  trimStart = this.proxy('trimStart')

  transforms = [
    'set',
    'reset',
    'clear',
    'concat',
    'normalize',
    'padEnd',
    'padStart',
    'repeat',
    'replace',
    'slice',
    'substr',
    'substring',
    'toLowerCase',
    'toUpperCase',
    'trim',
    'trimEnd',
    'trimStart',
  ]
}

export default StringValue
