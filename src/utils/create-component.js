import { Component } from 'preact';

export default function createComponent(Store) {
  return class Value extends Component {
    constructor(props, context) {
      super(props)
      let { value, defaultValue, store } = props
      const connected = !store
      let controlled = false

      if (!store) {
        if (value !== undefined) {
          store = new Store(value, props)
          controlled = true
        } else {
          store = new Store(defaultValue, props)
        }
      }

      this.state = {
        connected,
        controlled,
        store,
        value: store.value,
      }
    }

    componentDidMount() {
      const { controlled, store } = this.state
      this.mounted = true

      this.unsubscribe = store.on(value => {
        if (!this.mounted) return

        if (controlled) {
          this.onChange(value)
        } else {
          this.setState({ value }, () => this.onChange(this.state.value))
        }
      })
    }

    componentWillUnmount() {
      this.mounted = false
      this.unsubscribe()
    }

    onChange(value) {
      if (this.props.onChange) {
        this.props.onChange(value)
      }
    }

    render() {
      const { children, render, disabled = false } = this.props
      const { controlled, connected, store } = this.state
      const value = controlled ? this.props.value : this.state.value
      const transforms = disabled ? store.noops : store.transforms
      const fn = children[0] || render

      if (!connected) {
        store.props = this.props
      }

      if (fn === null) {
        return null
      }

      const renderProps = { value, disabled, ...transforms }

      for (const key in store.computeds) {
        renderProps[key] = store.computeds[key]()
      }

      const ret = typeof fn === 'function' ? fn(renderProps) : fn
      return ret
    }
  }
}
