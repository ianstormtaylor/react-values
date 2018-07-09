export default function defaults(props, def) {
  const { value, defaultValue } = props
  if (value !== undefined) return value
  if (defaultValue !== undefined) return defaultValue
  return def
}
