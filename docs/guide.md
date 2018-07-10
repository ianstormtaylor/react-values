# Getting Started

To install `react-values` with Yarn or Npm, simply:

```bash
yarn add react-values
```

```bash
npm install --save react-values
```

You can then import any of its helpers into your code base:

```js
import { BooleanValue, NumberValue } from 'react-values'
```

> 🤖 If you would rather import `react-values` with a `<script>` tag, you can use the bundled build:
>
> ```html
> <script src="https://unpkg.com/react-values/dist/react-values.min.js"></script>
> ```
>
> This will expose the `ReactValues` global with its components.

---

With `react-values` installed, now you can start building components with it. For example, lets build a toggle with the `<BooleanValue>` helper.

To start, setup an non-interactive toggle component with some styles:

```js
import React from 'react'
import styled from 'react-emotion'

const Track = styled('div')`
  position: relative;
  height: 25px;
  width: 50px;
  background-color: ${props => (props.on ? 'lightgreen' : 'lightgray')};
  border-radius: 999px;
  cursor: pointer;
`

const Thumb = styled('div')`
  position: absolute;
  transition: all 0.25s;
  height: 23px;
  width: 23px;
  top: 1px;
  left: ${props => (props.on ? '26px' : '1px')};
  background-color: white;
  border-radius: 999px;
  cursor: pointer;
`

const Toggle = () => (
  <Track>
    <Thumb />
  </Track>
)
```

Which you can render like so:

```js
<Toggle />
```

This works, but the toggle is not interactive. It has no way of managing any state, so it's always just "off".

---

To make it stateful, lets use a `<BooleanValue>` helper from `react-values`:

```js
import { BooleanValue } from 'react-values'

const Toggle = () => (
  <BooleanValue>
    {({ value, toggle }) => (
      <Track on={value} onClick={toggle}>
        <Thumb on={value} />
      </Track>
    )}
  </BooleanValue>
)
```

Now your toggle derives its `on` state from the `value` prop passed it to by the `<BooleanValue>` component.

When you click on it, it uses the provided `toggle` transform to flip the boolean. As soon as this happens, `<BooleanValue>` re-renders, and your toggle is now on!

> 🤖 Booleans are fairly simple pieces of state, so the `toggle()` transform is all you can really do. But depending on which type of value you're working with `react-values` will provide all sorts of convenient transforms. Check out the [API Reference](./reference.md) for a full list.

This is great, it's a working toggle!

But we're not done yet... There is no way to observe the toggle as it changes, so it's not all that useful. Let's fix that...

---

To observe the toggle's state, you can pass in an `onChange` prop to the `<BooleanValue>`:

```js
const Toggle = ({ onChange }) => (
  <BooleanValue onChange={onChange}>
    {({ value, toggle }) => (
      <Track on={value} onClick={toggle}>
        <Thumb on={value} />
      </Track>
    )}
  </BooleanValue>
)
```

Now you can listen for changes to the toggle by passing in an `onChange` handler:

```js
<Toggle onChange={value => ...} />
```

---

But if you want to share this component with others, they might ask you to be able to start the component in the "on" state instead of in the "off" state.

No problem. To do this, use the `defaultValue` prop:

```js
const Toggle = ({ defaultValue, onChange }) => (
  <BooleanValue defaultValue={defaultValue} onChange={onChange}>
    {({ value, toggle }) => (
      <Track on={value} onClick={toggle}>
        <Thumb on={value} />
      </Track>
    )}
  </BooleanValue>
)
```

That way people can do:

```js
<Toggle
  defaultValue={true}
  onChange={value => ...}
/>
```

---

But wait! What if someone wants to use the toggle in a "controlled" manner, just like you can with React's native `<input>` and `<select>` components.

To do that, you can use the `value` prop:

```js
const Toggle = ({ value, defaultValue, onChange }) => (
  <BooleanValue value={value} defaultValue={defaultValue} onChange={onChange}>
    {({ value, toggle }) => (
      <Track on={value} onClick={toggle}>
        <Thumb on={value} />
      </Track>
    )}
  </BooleanValue>
)
```

Now anyone who renders the toggle can choose whether they want to use it in a "controlled" manner or an "uncontrolled" manner, by passing either a `value` or a `defaultValue`:

```js
<Toggle
  value={true}
  onChange={value => ...}
/>

<Toggle
  defaultValue={true}
  onChange={value => ...}
/>
```

---

One final change, just for simplicity's sake. You'll notice how we were passing the props in explicitly, but to make your code even simpler you can just spread them directly onto the `<BooleanValue>` instead:

```js
const Toggle = props => (
  <BooleanValue {...props}>
    {({ value, toggle }) => (
      <Track on={value} onClick={toggle}>
        <Thumb on={value} />
      </Track>
    )}
  </BooleanValue>
)
```

That's all!

Thanks to the `<BooleanValue>` helper component handling the state management for you, you've implemented a fully functional toggle in just a few lines of code—and it can be either controlled or uncontrolled!

And `react-values` handles more than just simple booleans. Check out the full [API Reference](./reference.md) to see everything you can do.
