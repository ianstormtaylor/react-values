# Getting Started

To install `react-values` with Yarn or Npm, simply:

```bash
yarn add react-values
```

```bash
npm install --save react-values
```

And then you can import any of its helpers into your code base:

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

Once you've got `react-values` installed, the next step is to use one of its helper components to provide a state. For example, lets build a toggle with the `<BooleanValue>` helper.

To start, setup an non-interactive toggle component with your styles...

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

You can render it like so:

```js
<Toggle />
```

Okay, so you can see your toggle now. But its not interactive, and it has no way of managing any state. It's always "off".

To make it stateful, lets use a `<BooleanValue>` helper from `react-values`...

```js
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

Now your toggle is deriving its `on` state from the `value` prop passed it to by the `<BooleanValue>` component.

And when you click on it, it uses the provided `toggle` transform to flip the boolean. As soon as this happens, `<BooleanValue>` re-renders, and your toggle is now on!

This is great, it's a working toggle.

But we're not done yet, because there is no way to observe the toggle as it changes, so it's not really useful yet. To do that, you can pass in an `onChange` prop to the `<BooleanValue>`:

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

Now people can listen for changes to the toggle:

```js
<Toggle onChange={value => ...} />
```

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

There you have it!

Thanks to the `<BooleanValue>` helper component handling the state management for you, you've implemented a fully functional toggle in just a few lines of code—and it can be either controlled or uncontrolled!
