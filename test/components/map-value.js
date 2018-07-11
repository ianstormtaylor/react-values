import assert from 'assert'
import React from 'react'
import sinon from 'sinon'
import { MapValue } from '../../src'
import Renderer from 'react-test-renderer'

describe('<MapValue>', () => {
  it('initialize', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<MapValue children={fake} />)
    assert.deepEqual(fake.lastArg.value, new Map())
  })

  it('value', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<MapValue children={fake} value={new Map([['a', 1]])} />)
    assert.deepEqual(fake.lastArg.value, new Map([['a', 1]]))
  })

  it('defaultValue', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <MapValue children={fake} defaultValue={new Map([['a', 1]])} />
    )

    assert.deepEqual(fake.lastArg.value, new Map([['a', 1]]))
  })

  it('set(value)', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<MapValue children={fake} />)
    fake.lastArg.set(new Map([['a', 1]]))
    assert.deepEqual(fake.lastArg.value, new Map([['a', 1]]))
    fake.lastArg.set(new Map([['b', 2]]))
    assert.deepEqual(fake.lastArg.value, new Map([['b', 2]]))
  })

  it('reset() (mutates)', () => {
    const fake = sinon.fake.returns(null)
    const initial = new Map([['a', 1]])
    Renderer.create(<MapValue children={fake} defaultValue={initial} />)
    fake.lastArg.set(new Map([['b', 2]]))
    fake.lastArg.reset()
    const { value } = fake.lastArg
    assert.deepEqual(value, new Map([['a', 1]]))
    assert.notEqual(value, initial)
  })

  it('clear() (mutates)', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <MapValue children={fake} defaultValue={new Map([['a', 1]])} />
    )

    fake.lastArg.set(new Map([['b', 2]]))
    const previous = fake.lastArg.value
    fake.lastArg.clear()
    const { value } = fake.lastArg
    assert.deepEqual(value, new Map())
    assert.notEqual(value, previous)
  })

  it('set(key, val)', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<MapValue children={fake} />)
    fake.lastArg.set('b', 2)
    assert.deepEqual(fake.lastArg.value, new Map([['b', 2]]))
  })

  it('delete(key) (mutates)', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <MapValue children={fake} defaultValue={new Map([['a', 1], ['b', 2]])} />
    )

    const previous = fake.lastArg.value
    fake.lastArg.delete('a')
    const { value } = fake.lastArg
    assert.deepEqual(value, new Map([['b', 2]]))
    assert.notEqual(value, previous)
  })

  it('unset(key) (alias) (mutates)', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <MapValue children={fake} defaultValue={new Map([['a', 1], ['b', 2]])} />
    )

    const previous = fake.lastArg.value
    fake.lastArg.unset('a')
    const { value } = fake.lastArg
    assert.deepEqual(value, new Map([['b', 2]]))
    assert.notEqual(value, previous)
  })

  it('onChange', () => {
    const fake = sinon.fake.returns(null)
    const onChange = sinon.fake()
    Renderer.create(<MapValue children={fake} onChange={onChange} />)
    fake.lastArg.set(new Map([['a', 1]]))
    assert.deepEqual(onChange.lastArg, new Map([['a', 1]]))
  })

  it('render', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<MapValue render={fake} />)
    assert.deepEqual(fake.lastArg.value, new Map())
  })
})
