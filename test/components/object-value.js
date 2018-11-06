import assert from 'assert'
import React from 'react'
import sinon from 'sinon'
import { ObjectValue, createObjectValue } from '../../src'
import Renderer from 'react-test-renderer'

describe('<ObjectValue>', () => {
  it('initialize', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<ObjectValue children={fake} />)
    assert.deepEqual(fake.lastArg.value, {})
  })

  it('value', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<ObjectValue children={fake} value={{ a: 1 }} />)
    assert.deepEqual(fake.lastArg.value, { a: 1 })
  })

  it('defaultValue', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<ObjectValue children={fake} defaultValue={{ a: 1 }} />)
    assert.deepEqual(fake.lastArg.value, { a: 1 })
  })

  it('set(value)', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<ObjectValue children={fake} />)
    fake.lastArg.set({ a: 1 })
    assert.deepEqual(fake.lastArg.value, { a: 1 })
    fake.lastArg.set({ b: 2 })
    assert.deepEqual(fake.lastArg.value, { b: 2 })
  })

  it('reset() (mutates)', () => {
    const fake = sinon.fake.returns(null)
    const initial = { a: 1 }
    Renderer.create(<ObjectValue children={fake} defaultValue={initial} />)
    fake.lastArg.set({ b: 2 })
    fake.lastArg.reset()
    const { value } = fake.lastArg
    assert.deepEqual(value, { a: 1 })
    assert.notEqual(value, initial)
  })

  it('clear() (mutates)', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<ObjectValue children={fake} defaultValue={{ a: 1 }} />)
    fake.lastArg.set({ b: 2 })
    const previous = fake.lastArg.value
    fake.lastArg.clear()
    const { value } = fake.lastArg
    assert.deepEqual(value, {})
    assert.notEqual(value, previous)
  })

  it('set(key, val)', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<ObjectValue children={fake} />)
    fake.lastArg.set('b', 2)
    assert.deepEqual(fake.lastArg.value, { b: 2 })
  })

  it('delete(key) (mutates)', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <ObjectValue children={fake} defaultValue={{ a: 1, b: 2 }} />
    )

    const previous = fake.lastArg.value
    fake.lastArg.delete('a')
    const { value } = fake.lastArg
    assert.deepEqual(value, { b: 2 })
    assert.notEqual(value, previous)
  })

  it('unset(key) (alias) (mutates)', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <ObjectValue children={fake} defaultValue={{ a: 1, b: 2 }} />
    )

    const previous = fake.lastArg.value
    fake.lastArg.unset('a')
    const { value } = fake.lastArg
    assert.deepEqual(value, { b: 2 })
    assert.notEqual(value, previous)
  })

  it('assign(val) (mutates)', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<ObjectValue children={fake} defaultValue={{ a: 1 }} />)
    const previous = fake.lastArg.value
    fake.lastArg.assign({ b: 2 })
    const { value } = fake.lastArg
    assert.deepEqual(value, { a: 1, b: 2 })
    assert.notEqual(value, previous)
  })

  it('onChange', () => {
    const fake = sinon.fake.returns(null)
    const onChange = sinon.fake()
    Renderer.create(<ObjectValue children={fake} onChange={onChange} />)
    fake.lastArg.set({ a: 1 })
    assert.deepEqual(onChange.lastArg, { a: 1 })
  })

  it('render', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<ObjectValue render={fake} />)
    assert.deepEqual(fake.lastArg.value, {})
  })

  it('controlled', () => {
    const fake = sinon.fake.returns(null)
    const onChange = sinon.fake()
    const renderer = Renderer.create(
      <ObjectValue children={fake} value={{ a: 1 }} onChange={onChange} />
    )

    renderer.update(
      <ObjectValue children={fake} value={{ a: 2 }} onChange={onChange} />
    )

    fake.lastArg.set('b', 1)
    assert.deepEqual(onChange.lastArg, { a: 2, b: 1 })
  })

  it('connected', () => {
    const Connected = createObjectValue({ a: 1, b: 2 })
    const one = sinon.fake.returns(null)
    const two = sinon.fake.returns(null)

    Renderer.create(
      <React.Fragment>
        <Connected children={one} />
        <Connected children={two} />
      </React.Fragment>
    )

    assert.deepEqual(one.lastArg.value, { a: 1, b: 2 })
    assert.deepEqual(two.lastArg.value, { a: 1, b: 2 })
    one.lastArg.set('b', null)
    assert.deepEqual(one.lastArg.value, { a: 1, b: null })
    assert.deepEqual(two.lastArg.value, { a: 1, b: null })
    two.lastArg.unset('b')
    assert.deepEqual(one.lastArg.value, { a: 1 })
    assert.deepEqual(two.lastArg.value, { a: 1 })
  })
})
