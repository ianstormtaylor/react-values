import React from 'react'

export default function createFactory(Store, Value) {
  return (initial, props) => {
    const store = new Store(initial, props)

    class Connected extends React.Component {
      static get value() {
        return store.value
      }

      render() {
        return <Value {...this.props} store={store} />
      }
    }

    for (const k in store.transforms) {
      Connected[k] = store.transforms[k]
    }

    Connected.store = store
    Connected.displayName = `Connected${Value.displayName}`
    return Connected
  }
}
