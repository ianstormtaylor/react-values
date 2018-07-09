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
  <a href="http://docs.slatejs.org"><strong>Documentation</strong></a>
</p>
<br/>

<p align="center">
  <a href="https://www.npmjs.com/package/react-values">
    <img src="https://img.shields.io/npm/dt/react-values.svg?maxAge=3600">
  </a> 
  <a href="https://unpkg.com/react-values/dist/react-values.min.js">
    <img src="http://img.badgesize.io/https://unpkg.com/react-values/dist/react-values.min.js?compression=gzip&amp;label=react-values">
  </a>
  <a href="https://travis-ci.org/ianstormtaylor/react-values">
    <img src="https://travis-ci.org/ianstormtaylor/react-values.svg?branch=master">
  </a> 
  <a href="./packages/react-values/package.json">
    <img src="https://img.shields.io/npm/v/react-values.svg?maxAge=3600&label=react-values&colorB=007ec6">
  </a> 
  <a href="./License.md">
    <img src="https://img.shields.io/npm/l/react-values.svg?maxAge=3600">
  </a> 
</p>
<br/>

`react-values` gives you a set of simple, composable helpers that let you build more complex, stateful UI components like toggles, dropdowns, lists, checkbox groups, popovers, tooltips, you name it!

It does this using a small render-prop-based API that exposes helpful transforms like `toggle`, `increment`, `filter`, etc. depending on the type of value, so that you don't have to re-write state management logic and can instead keep your components focused on behavior and presentation.

```js
import { BooleanValue } from 'react-values'

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

const Toggle = ({ value, defaultValue, onChange }) => (
  <BooleanValue value={value} defaultValue={defaultValue} onChange={onChange}>
    {({ value: on, toggle }) => (
      <Track on={on} onClick={toggle}>
        <Thumb on={on} />
      </Track>
    )}
  </BooleanValue>
)
```

<br/>

### Why?

While building an app with React, you end up building a lot of stateful components in the process. Whether at the UI kit level for things like toggles, tooltips, checkbox groups, dropdown, etc. Or at the app level for modals, popovers, sorting, filtering, etc.

In the process, you end up re-implementing run of the mill state-handling logic all over the place, using `this.setState` and `this.state`. And for your components to be nicely reusable across your application you end up writing them to handle both "controlled" and "uncontrolled" use cases using `value` or `defaultValue`. And to make things a bit more manageable, you pull out common transforms like `toggle`, `increment`, `decrement` into their own methods on the component. And if you're working with a team, you end up doing all of this in slightly different ways throughout your codebase.

In the end, you're now maintaing a lot more logic than necessary, duplicated in many different places. And your app's bundle size gets larger and larger.

`react-values` solves all of that...

<br/>

### Principles

`react-values` solves those problems with a few principles:

1. **Use render props.** It uses a render-prop-based API with children functions to expose its state, and to provide powerful transform functions that do the state management for you.

2. **Follow React's conventions.** Its components follow React's own naming conventions, using familiar concepts like `value/defaultValue`. This makes it slot into existing frameworks extremely well.

3. **Follow JavaScript's conventions.** It also leverages JavaScript's familiar, built-in methods like `push/pop`, `filter`, etc. so that it's not reinventing the wheel and forcing you to constantly re-read documentation.

4. **Be extremely lightweight.** It's extremely lightweight (and tree-shakeable), with most components weighing just a few hundred bytes, so you can even use it in public-facing components.

<br/>

### Examples

To get a sense for how you might use `react-values`, check out a few of the examples:

* [**Toggle**](./examples/toggle) — using a `Boolean` to create a simple toggle component.
* [**Controlled Toggle**](./examples/toggle) — showing how you might turn that toggle into a controlled component in your own UI kit.

If you have an idea for an example that shows a common use case, pull request it!

<br/>

### Documentation

If you're using Slate for the first time, check out the [Getting Started](http://docs.slatejs.org/walkthroughs/installing-react-values) walkthroughs and the [Guides](http://docs.slatejs.org/guides) to familiarize yourself with Slate's architecture and mental models. Once you've gotten familiar with those, you'll probably want to check out the full [API Reference](http://docs.slatejs.org/react-values-core).

* [**Walkthroughs**](http://docs.slatejs.org/walkthroughs/installing-react-values)
* [**Guides**](http://docs.slatejs.org/guides)
* [**Reference**](http://docs.slatejs.org/react-values-core)
* [**FAQ**](http://docs.slatejs.org/general/faq)
* [**Resources**](http://docs.slatejs.org/general/resources)

If even that's not enough, you can always [read the source itself](./src), which is heavily commented.
