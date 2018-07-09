export default function proxy(value, method, mutates) {
  return (...args) => {
    value.set(v => {
      const ret = v[method](...args)
      return mutates ? v : ret
    })
  }
}
