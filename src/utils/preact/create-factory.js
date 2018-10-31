import { h } from 'preact';

export default function createFactory(Store, Value) {
  return (initial, props) => {
    const store = new Store(initial, props)

    function Connected(props) {
      return (<Value {...props} store={store} />)
    }

    for (const k in store.transforms) {
      Connected[k] = store.transforms[k]
    }

    Connected.displayName = `Connected${Value.displayName}`
    return Connected
  }
}
