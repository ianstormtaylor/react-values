# Changelog

This document maintains a list of changes to the `react-values` package with each new version. Until `1.0.0` is released, breaking changes will be added as minor version bumps.

---

### `0.3.0` — August 6, 2018

###### NEW

**Introducing "connected" values.** These new types of values allow you to define a single value that can be rendered in multiple places, and will be kept in sync across all of the places they are rendered.

```jsx
import { createBooleanValue } from 'react-values'

const ModalValue = createBooleanValue(false)

<App>
  <ModalValue>
    {({ toggle }) => (
      <Button onClick={toggle} />
    )}
  </ModalValue>
  <ModalValue>
    {({ value: isOpen, toggle }) => (
      isOpen && <Modal />
    )}
  </ModalValue>
</App>
```

This kind of "global" value is helpful any time you want to refer to a single piece of data in multiple places in your app's render tree. It is often the use case that forces people to adopt "state management libraries", and introduce a lot of complexity into their codebase. But now it can be solved with simple components and render props.

###### BREAKING

**`<AnyValue>` has been renamed to `<Value>`.** This is just to keep things slightly simpler for the default case, since the `Any*` prefix wasn't really necessary.

---

### `0.2.0` — July 11, 2018

###### NEW

**Added a `disabled` prop for disabling components.** This makes it trivial to implement a "disabled" state in components, where no transforms will take place even if their functions are called, without forcing you to maintain your own separate disabled state.

```jsx
<BooleanValue disabled={true}>...</BooleanValue>
```

###### BREAKING

**Mutable transforms now act on a copy.** This ensures that the new render props you receive can be compared by reference to test if they have changed. This makes the library more inline with what people expect as the default behavior of state management libraries in React. Technically it's a breaking change, but it shouldn't really have any affect on most use cases.

---

### `0.1.0` — July 10, 2018

:tada:
