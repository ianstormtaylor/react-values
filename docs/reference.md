# API Reference

* [`<AnyValue>`](#anyvalue)
* [`<ArrayValue>`](#arrayvalue)
* [`<BooleanValue>`](#booleanvalue)
* [`<DateValue>`](#datevalue)
* [`<MapValue>`](#mapvalue)
* [`<NumberValue>`](#numbervalue)
* [`<SetValue>`](#setvalue)
* [`<StringValue>`](#stringvalue)

---

### `<AnyValue>`

The `<AnyValue>` component is the most generic component exposed by `react-values`, and it is the base for all other components.

It takes either a `value` or `defaultValue` and an `onChange` handler.

```js
<AnyValue
  value={Any|undefined}
  defaultValue={Any|undefined}
  onChange={Function}
>
  {({
    value,
    set,
    reset,
  }) => (
    ...
  )}
</AnyValue>
```

| Render Prop | Type                    | Description                            |
| ----------- | ----------------------- | -------------------------------------- |
| `value`     | `Any`                   | The state's current value.             |
| `set`       | `Function` `set(value)` | Sets the value to a new state.         |
| `reset`     | `Function` `reset()`    | Resets the value to its initial state. |

---

### `<ArrayValue>`

A value for an `Array`.

```js
<ArrayValue
  value={Array|undefined}
  defaultValue={Array|undefined}
  onChange={Function}
>
  {({
    value,
    set,
    reset,
    concat,
    fill,
    filter,
    map,
    pop,
    push,
    reverse,
    shift,
    slice,
    sort,
    splice,
    unshift,
  }) => (
    ...
  )}
</ArrayValue>
```

| Render Prop | Type                                          | Description                                                                                                              |
| ----------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `value`     | `Array`                                       | The current array value.                                                                                                 |
| `set`       | `Function` `set(array)`                       | Sets the value to a new state.                                                                                           |
| `reset`     | `Function` `reset()`                          | Resets the value to its initial state.                                                                                   |
| `concat`    | `Function` `concat(...values)`                | Calls [`Array.concat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat).   |
| `fill`      | `Function` `fill(value)`                      | Calls [`Array.fill`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill).       |
| `filter`    | `Function` `filter(callback)`                 | Calls [`Array.filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).   |
| `flat`      | `Function` `flat(depth)`                      | Calls [`Array.flat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat).       |
| `flatMap`   | `Function` `flatMap(callback)`                | Calls [`Array.flatMap`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap). |
| `map`       | `Function` `map(callback)`                    | Calls [`Array.map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).         |
| `pop`       | `Function` `pop()`                            | Calls [`Array.pop`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop).         |
| `push`      | `Function` `push(...values)`                  | Calls [`Array.push`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push).       |
| `reverse`   | `Function` `reverse()`                        | Calls [`Array.reverse`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse). |
| `shift`     | `Function` `shift()`                          | Calls [`Array.shift`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift).     |
| `slice`     | `Function` `slice(begin, end)`                | Calls [`Array.slice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice).     |
| `sort`      | `Function` `sort(comparator)`                 | Calls [`Array.sort`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort).       |
| `splice`    | `Function` `splice(start, remove, ...values)` | Calls [`Array.splice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).   |
| `unshift`   | `Function` `unshift(...values)`               | Calls [`Array.unshift`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift). |

---

### `<BooleanValue>`

A value for a `Boolean`.

```js
<BooleanValue
  value={Boolean|undefined}
  defaultValue={Boolean|undefined}
  onChange={Function}
>
  {({
    value,
    set,
    reset,
    toggle,
  }) => (
    ...
  )}
</BooleanValue>
```

| Render Prop | Type                      | Description                             |
| ----------- | ------------------------- | --------------------------------------- |
| `value`     | `Boolean`                 | The current boolean value.              |
| `set`       | `Function` `set(boolean)` | Sets the value to a new state.          |
| `reset`     | `Function` `reset()`      | Resets the value to its initial state.  |
| `toggle`    | `Function` `toggle()`     | Sets the boolean to its opposite value. |

---

### `<DateValue>`

A value for a `Date`.

```js
<DateValue
  value={Date|undefined}
  defaultValue={Date|undefined}
  onChange={Function}
>
  {({
    value,
    set,
    reset,
    date,
    hours,
    milliseconds,
    minutes,
    month,
    seconds,
    year,
    setDate,
    setHours,
    setMilliseconds,
    setMinutes,
    setMonth,
    setSeconds,
    setYear,
    incrementDate,
    incrementHours,
    incrementMilliseconds,
    incrementMinutes,
    incrementMonth,
    incrementSeconds,
    incrementYear,
    decrementDate,
    decrementFullYear,
    decrementHours,
    decrementMilliseconds,
    decrementMinutes,
    decrementMonth,
    decrementSeconds,
  }) => (
    ...
  )}
</DateValue>
```

| Render Prop             | Type                                      | Description                                                                                                                                              |
| ----------------------- | ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `value`                 | `Date`                                    | The current date value.                                                                                                                                  |
| `set`                   | `Function` `set(date)`                    | Sets the value to a new date.                                                                                                                            |
| `reset`                 | `Function` `reset()`                      | Resets the value to its initial state.                                                                                                                   |
| `year`                  | `Number`                                  | The current state of [`value.getFullYear()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear).         |
| `month`                 | `Number`                                  | The current state of [`value.getMonth()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth).               |
| `date`                  | `Number`                                  | The current state of [`value.getDate()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate).                 |
| `hours`                 | `Number`                                  | The current state of [`value.getHours()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours).               |
| `minutes`               | `Number`                                  | The current state of [`value.getMinutes()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes).           |
| `seconds`               | `Number`                                  | The current state of [`value.getSeconds()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds).           |
| `milliseconds`          | `Number`                                  | The current state of [`value.getMilliseconds()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds). |
| `setYear`               | `Function` `setYear(n)`                   | Calls [`Date.setFullYear`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear).                           |
| `setMonth`              | `Function` `setMonth(n)`                  | Calls a bug-fixed version of [`Date.setMonth`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMonth).          |
| `setDate`               | `Function` `setDate(n)`                   | Calls [`Date.setDate`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setDate).                                   |
| `setHours`              | `Function` `setHours(n)`                  | Calls [`Date.setHours`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setHours).                                 |
| `setMinutes`            | `Function` `setMinutes(n)`                | Calls [`Date.setMinutes`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMinutes).                             |
| `setSeconds`            | `Function` `setSeconds(n)`                | Calls [`Date.setSeconds`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setSeconds).                             |
| `setMilliseconds`       | `Function` `setMilliseconds(n)`           | Calls [`Date.setMilliseconds`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setMilliseconds).                   |
| `incrementYear`         | `Function` `incrementYear(n = 1)`         | Increments the value's year by `n`.                                                                                                                      |
| `incrementMonth`        | `Function` `incrementMonth(n = 1)`        | Increments the value's month by `n`.                                                                                                                     |
| `incrementDate`         | `Function` `incrementDate(n = 1)`         | Increments the value's date by `n`.                                                                                                                      |
| `incrementHours`        | `Function` `incrementHours(n = 1)`        | Increments the value's hours by `n`.                                                                                                                     |
| `incrementMinutes`      | `Function` `incrementMinutes(n = 1)`      | Increments the value's minutes by `n`.                                                                                                                   |
| `incrementSeconds`      | `Function` `incrementSeconds(n = 1)`      | Increments the value's seconds by `n`.                                                                                                                   |
| `incrementMilliseconds` | `Function` `incrementMilliseconds(n = 1)` | Increments the value's milliseconds by `n`.                                                                                                              |
| `decrementYear`         | `Function` `decrementYear(n = 1)`         | Decrements the value's year by `n`.                                                                                                                      |
| `decrementMonth`        | `Function` `decrementMonth(n = 1)`        | Decrements the value's month by `n`.                                                                                                                     |
| `decrementDate`         | `Function` `decrementDate(n = 1)`         | Decrements the value's date by `n`.                                                                                                                      |
| `decrementHours`        | `Function` `decrementHours(n = 1)`        | Decrements the value's hours by `n`.                                                                                                                     |
| `decrementMinutes`      | `Function` `decrementMinutes(n = 1)`      | Decrements the value's minutes by `n`.                                                                                                                   |
| `decrementSeconds`      | `Function` `decrementSeconds(n = 1)`      | Decrements the value's seconds by `n`.                                                                                                                   |
| `decrementMilliseconds` | `Function` `decrementMilliseconds(n = 1)` | Decrements the value's milliseconds by `n`.                                                                                                              |

---

### `<MapValue>`

A value for a `Map`.

```js
<MapValue
  value={Map|undefined}
  defaultValue={Map|undefined}
  onChange={Function}
>
  {({
    value,
    set,
    reset,
    unset,
    delete,
    clear,
  }) => (
    ...
  )}
</MapValue>
```

| Render Prop | Type                                       | Description                                                                                                                                          |
| ----------- | ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `value`     | `Any`                                      | The current map value.                                                                                                                               |
| `reset`     | `Function` `reset()`                       | Resets the value to its initial state.                                                                                                               |
| `set`       | `Function` `set(key, value)` or `set(map)` | Calls [`Map.set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set), or sets the value to a new map.         |
| `delete`    | `Function` `delete(key)`                   | Calls [`Map.delete`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/delete).                                   |
| `unset`     | `Function` `unset(key)`                    | An alias for [`Map.delete`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/delete) that's not a reserved word. |
| `clear`     | `Function` `clear()`                       | Calls [`Map.clear`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/clear).                                     |

---

### `<NumberValue>`

A value for a `Number`.

```js
<NumberValue
  value={Number|undefined}
  defaultValue={Number|undefined}
  onChange={Function}
>
  {({
    value,
    set,
    reset,
    increment,
    decrement,
  }) => (
    ...
  )}
</NumberValue>
```

| Render Prop | Type                          | Description                            |
| ----------- | ----------------------------- | -------------------------------------- |
| `value`     | `Number`                      | The current number value.              |
| `set`       | `Function` `set(number)`      | Sets the value to a new `number`.      |
| `reset`     | `Function` `reset()`          | Resets the value to its initial state. |
| `increment` | `Function` `increment(n = 1)` | Increments the number by `n`.          |
| `decrement` | `Function` `decrement(n = 1)` | Decrements the number by `n`.          |

---

### `<SetValue>`

A value for a `Set`.

```js
<SetValue
  value={Set|undefined}
  defaultValue={Set|undefined}
  onChange={Function}
>
  {({
    value,
    set,
    reset,
    add,
    remove,
    delete,
    clear,
  }) => (
    ...
  )}
</SetValue>
```

| Render Prop | Type                       | Description                                                                                                                                          |
| ----------- | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `value`     | `Set`                      | The current set value.                                                                                                                               |
| `set`       | `Function` `set(set)`      | Sets the value to a new `set`.                                                                                                                       |
| `reset`     | `Function` `reset()`       | Resets the value to its initial state.                                                                                                               |
| `add`       | `Function` `add(value)`    | Calls [`Set.add`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/add).                                         |
| `delete`    | `Function` `delete(value)` | Calls [`Set.delete`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/delete).                                   |
| `remove`    | `Function` `remove(value)` | An alias for [`Set.delete`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/delete) that's not a reserved word. |
| `clear`     | `Function` `clear()`       | Calls [`Set.clear`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/clear).                                     |

---

### `<StringValue>`

A value for a `String`.

```js
<StringValue
  value={String|undefined}
  defaultValue={String|undefined}
  onChange={Function}
>
  {({
    value,
    set,
    reset,
    concat,
    padEnd,
    padStart,
    repeat,
    replace,
    slice,
    substr,
    substring,
    toLowerCase,
    toUpperCase,
    trim,
    trimEnd,
    trimStart,
  }) => (
    ...
  )}
</StringValue>
```

| Render Prop   | Type                            | Description                                                                                                                        |
| ------------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `value`       | `String`                        | The current string value.                                                                                                          |
| `set`         | `Function` `set(string)`        | Sets the value to a new `string`.                                                                                                  |
| `reset`       | `Function` `reset()`            | Resets the value to its initial state.                                                                                             |
| `concat`      | `Function` `concat(value)`      | Calls [`String.concat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat).           |
| `padEnd`      | `Function` `padEnd(value)`      | Calls [`String.padEnd`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd).           |
| `padStart`    | `Function` `padStart(value)`    | Calls [`String.padStart`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart).       |
| `repeat`      | `Function` `repeat(value)`      | Calls [`String.repeat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat).           |
| `replace`     | `Function` `replace(value)`     | Calls [`String.replace`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace).         |
| `slice`       | `Function` `slice(value)`       | Calls [`String.slice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice).             |
| `substr`      | `Function` `substr(value)`      | Calls [`String.substr`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr).           |
| `substring`   | `Function` `substring(value)`   | Calls [`String.substring`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring).     |
| `toLowerCase` | `Function` `toLowerCase(value)` | Calls [`String.toLowerCase`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase). |
| `toUpperCase` | `Function` `toUpperCase(value)` | Calls [`String.toUpperCase`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase). |
| `trim`        | `Function` `trim(value)`        | Calls [`String.trim`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim).               |
| `trimEnd`     | `Function` `trimEnd(value)`     | Calls [`String.trimEnd`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd).         |
| `trimStart`   | `Function` `trimStart(value)`   | Calls [`String.trimStart`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart).     |
