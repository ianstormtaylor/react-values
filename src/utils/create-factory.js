import React from 'react'

export default function createFactory(Store, Value) {
  return (initial, props) => {
    const store = new Store(initial, props)

    class Connected extends React.Component {
      render() {
        return <Value {...this.props} store={store} />
      }
    }

    for (const k in store.transforms) {
      Connected[k] = store.transforms[k]
    }

    Connected.displayName = `Connected${Value.displayName}`
    return Connected
  }
}
