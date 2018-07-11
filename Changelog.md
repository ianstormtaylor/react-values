# Changelog

This document maintains a list of changes to the `react-values` package with each new version. Until `1.0.0` is released, breaking changes will be added as minor version bumps.

---

### `0.2.0` — July 11, 2018

###### BREAKING

* **Mutable transforms now act on a copy.** This ensures that the new render props you receive can be compared by reference to test if they have changed. This makes the library more inline with what people expect as the default behavior of state management libraries in React. Technically it's a breaking change, but it shouldn't really have any affect on most use cases.

###### NEW

* **Added a `disabled` prop for disabling components.** This makes it trivial to implement a "disabled" state in components, where no transforms will take place even if their functions are called, without forcing you to maintain your own separate disabled state.

---

### `0.1.0` — July 10, 2018

:tada:
