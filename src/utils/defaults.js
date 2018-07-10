export default function defaults(props, fallback) {
  let { value, defaultValue } = props
  if (value === undefined && defaultValue === undefined) defaultValue = fallback
  return { value, defaultValue }
}
