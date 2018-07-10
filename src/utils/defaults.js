export default function defaults(props, defaultValue) {
  if (props.value !== undefined) return props.value
  if (props.defaultValue !== undefined) return props.defaultValue
  return defaultValue
}
