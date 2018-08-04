import React from 'react'

export default function createFactory(Component, Store) {
  return (initial, props) => {
    const store = new Store(initial, props)

    class Connected extends React.Component {
      render() {
        return <Component {...this.props} store={store} />
      }
    }

    Connected.displayName = `Connected${Component.displayName}`
    return Connected
  }
}
