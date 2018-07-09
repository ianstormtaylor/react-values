export default function render(props, obj) {
  const fn = props.children || props.render
  if (fn == null) return null
  return typeof fn === 'function' ? fn(obj) : fn
}
