<p align="center">
  <a href="#"><img src="./docs/images/banner.png" /></a>
</p>

<p align="center">
  A set of <em>tiny</em>, composable React components <br/>
  for handling state with render props.
</p>
<br/>

<p align="center">
  <a href="#why"><strong>Why?</strong></a> ·
  <a href="#principles"><strong>Principles</strong></a> ·
  <a href="#examples"><strong>Examples</strong></a> ·
  <a href="#documentation"><strong>Documentation</strong></a> ·
  <a href="#contributing"><strong>Contributing!</strong></a>
</p>
<br/>

<p align="center">
  <a href="https://unpkg.com/react-values/dist/react-values.min.js">
    <img src="https://img.badgesize.io/https://unpkg.com/react-values/dist/react-values.min.js?compression=gzip&amp;label=react--values">
  </a>
  <a href="./packages/react-values/package.json">
    <img src="https://img.shields.io/npm/v/react-values.svg?maxAge=3600&label=react-values&colorB=007ec6">
  </a>
</p>
<br/>

`react-values` gives you a set of simple, composable helpers that let you build more complex, stateful UI components like toggles, dropdowns, lists, checkbox groups, popovers, tooltips, you name it!

It does this using a small render-prop-based API that exposes helpful transforms like `toggle`, `increment`, `filter`, etc. depending on the type of value, all based on JavaScripts native value types...

* `Any` values provide simple transforms like `set` and `clear`.
* `Array` values provide native methods like `push`, `pop`, `filter`, etc.
* `Boolean` values provide `toggle`, which we've all re-implemented 100 times.
* `Date` values provide really helpful transforms like `setHours` and `incrementMonth`.
* `Map` values provide native methods like `set`, `delete` and `clear`.
* `Number` values provide `increment` and `decrement`, which have also been re-written in every codebase ever.
* `Object` values provide helpful transforms like `set`, `unset` and `assign`.
* `Set` values provide native methods like `add`, `delete` and `clear`.
* `String` values provide native methods like `concat`, `repeat`, `trim`, etc.

This saves you from constantly re-writing the same state management logic, so you can keep your components focused on behavior and presentation.

For example, here's a `<Toggle>` implemented in just a few lines of code using a `<BooleanValue>`:

```js
import { BooleanValue } from 'react-values'

const Toggle = ({ value, defaultValue, onChange }) => (
  <BooleanValue value={value} defaultValue={defaultValue} onChange={onChange}>
    {({ value: on, toggle }) => (
      <Track on={on} onClick={toggle}>
        <Thumb on={on} />
      </Track>
    )}
  </BooleanValue>
)

const Track = styled.div`
  position: relative;
  height: 25px;
  width: 50px;
  background-color: ${props => (props.on ? 'lightgreen' : 'lightgray')};
  border-radius: 50px;
`

const Thumb = styled.div`
  position: absolute;
  left: ${props => (props.on ? '25px' : '0')};
  height: 25px;
  width: 25px;
  background-color: white;
  border-radius: 50px;
`
```

<br/>

### Why?

While building an app with React, you end up building a lot of stateful components in the process. Whether at the UI kit level for things like toggles, tooltips, checkbox groups, dropdown, etc. Or at the app level for modals, popovers, sorting, filtering, etc.

In the process, you end up re-implementing run of the mill state handling logic all over the place—whether with `this.setState` or by building the same action creators over and over. And for your components to be nicely reusable across your application you augment them to handle both "controlled" and "uncontrolled" use cases using `value` or `defaultValue`. And to make things a bit more manageable, you re-invent common transforms like `open`, `close`, `toggle`, `increment`, `decrement`, etc. in lots of different components. And if you're working with a team, you end up doing all of this in slightly different ways throughout your codebase.

In the end, you're now maintaing a lot more logic than necessary, duplicated in many different places in slightly different ways. All while your app's bundle size gets larger and larger.

`react-values` solves all of that with a few principles...

<br/>

### Principles

1. **Leverage render props.** It uses a render-prop-based API, exposing its state and a handful of convenient transform functions to you with the flexible function-as-children pattern.

2. **Follow React's conventions.** Its components follow React's own naming conventions, using familiar concepts like `value/defaultValue`. This makes it extremely easy to slot into existing codebases or frameworks.

3. **Follow JavaScript's conventions.** It exposes JavaScript's familiar, built-in methods like `setDate/setHours`, `push/pop`, `filter`, `concat`, etc. to avoid reinventing the wheel and forcing you to constantly read documentation.

4. **Be extremely lightweight.** It's extremely lightweight (and tree-shakeable), with most components weighing just a few hundred bytes, so you can even import it from public-facing component libraries.

5. **Prioritize convenience.** It's designed to provide convenient functions like `increment`, `toggle`, and smarter ones like `incrementDate`, `decrementMonth`, so you can build complex interactions in just a few lines of code.

<br/>

### Examples

To get a sense for how you might use `react-values`, check out a few of the examples:

* [**Basic Toggle**](https://ianstormtaylor.github.io/react-values/#/basic-toggle) — using a `Boolean` to create a simple toggle component.
* [**Reusable Toggle**](https://ianstormtaylor.github.io/react-values/#/reusable-toggle) — showing how you might turn that toggle into a controlled component in your own UI kit.
* [**Counter**](https://ianstormtaylor.github.io/react-values/#/counter) — a simple counter using a `Number` and its convenience transforms.
* [**Time Picker**](https://ianstormtaylor.github.io/react-values/#/time-picker) — a more complex time picker component, using `Date` and its convenience transforms.
* [**Filtering**](https://ianstormtaylor.github.io/react-values/#/filtering) — a basic `String` value used for filtering a list.
* [**Checkbox Set**](https://ianstormtaylor.github.io/react-values/#/checkbox-set) — using a `Set` to keep track of a checkbox group.
* [**Simple Tooltip**](https://ianstormtaylor.github.io/react-values/#/tooltip) — a simplistic tooltip implemented as a `Boolean`.
* [**Simple Modal**](https://ianstormtaylor.github.io/react-values/#/modal) — a simplistic modal implemented as a `Boolean`.

If you have an idea for an example that shows a common use case, pull request it!

<br/>

### Documentation

If you're using `react-values` for the first time, check out the [Getting Started](./docs/guide.md) guide to familiarize yourself with how it works. Once you've done that, you'll probably want to check out the full [API Reference](http://docs.slatejs.org/react-values-core).

* [**Getting Started**](./docs/guide.md)
  * [Installing `react-values`](./docs/guide.md#installing-react-values)
  * [Building a Component](./docs/guide.md#building-a-component)
  * [Introducing State](./docs/guide.md#introducing-state)
  * [Observing Changes](./docs/guide.md#observing-changes)
  * [Setting Defaults](./docs/guide.md#settings-defaults)
  * [Controlled vs. Uncontrolled](./docs/guide.md#controlled-vs-uncontrolled)
  * [Spreading Props](./docs/guide.md#spreading-props)
* [**Reference**](./docs/reference.md)
  * [`<AnyValue>`](./docs/reference.md#anyvalue)
  * [`<ArrayValue>`](./docs/reference.md#arrayvalue)
  * [`<BooleanValue>`](./docs/reference.md#booleanvalue)
  * [`<DateValue>`](./docs/reference.md#datevalue)
  * [`<MapValue>`](./docs/reference.md#mapvalue)
  * [`<NumberValue>`](./docs/reference.md#numbervalue)
  * [`<ObjectValue>`](./docs/reference.md#objectvalue)
  * [`<SetValue>`](./docs/reference.md#setvalue)
  * [`<StringValue>`](./docs/reference.md#stringvalue)

If even that's not enough, you can always [read the source itself](./src).

There are also translations of the documentation into other languages:

* [中文 (Chinese)](https://github.com/chinanf-boy/react-values-zh)

If you're maintaining a translation, feel free to pull request it here!

<br/>

### Contributing!

All contributions are super welcome! Check out the [Contributing instructions](./Contributing.md) for more info!

`react-values` is [MIT-licensed](./License.md).
