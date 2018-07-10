# API Reference

* [`<AnyValue>`](#anyvalue)
* [`<ArrayValue>`](#arrayvalue)
* [`<BooleanValue>`](#booleanvalue)
* [`<DateValue>`](#datevalue)
* [`<MapValue>`](#mapvalue)
* [`<NumberValue>`](#numbervalue)
* [`<SetValue>`](#setvalue)
* [`<StringValue>`](#stringvalue)

### `<AnyValue>`

The `<AnyValue>` component is the most generic component exposed by `react-values`, and it is the base for all other components.

It takes either a `value` or `defaultValue` and an `onChange` handler.

```js
<AnyValue
  value={Any}
  defaultValue={Any}
  onChange={Function}
>
  {({ value, set, reset }) => (
    ...
  )}
</AnyValue>
```

| Render Prop | Type       | Description                            |
| ----------- | ---------- | -------------------------------------- |
| `value`     | `Any`      | The state's current value.             |
| `set`       | `Function` | Sets the value to a new state.         |
| `reset`     | `Function` | Resets the value to its initial state. |

