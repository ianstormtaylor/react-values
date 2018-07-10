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

  it('reset()', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <MapValue children={fake} defaultValue={new Map([['a', 1]])} />
    )

    fake.lastArg.set(new Map([['b', 2]]))
    fake.lastArg.reset()
    assert.deepEqual(fake.lastArg.value, new Map([['a', 1]]))
  })

  it('clear()', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <MapValue children={fake} defaultValue={new Map([['a', 1]])} />
    )

    fake.lastArg.set(new Map([['b', 2]]))
    fake.lastArg.clear()
    assert.deepEqual(fake.lastArg.value, new Map())
  })

  it('set(key, val)', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<MapValue children={fake} />)
    fake.lastArg.set('b', 2)
    assert.deepEqual(fake.lastArg.value, new Map([['b', 2]]))
  })

  it('delete(key)', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <MapValue children={fake} defaultValue={new Map([['a', 1], ['b', 2]])} />
    )

    fake.lastArg.delete('a')
    assert.deepEqual(fake.lastArg.value, new Map([['b', 2]]))
  })

  it('unset(key) (alias)', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <MapValue children={fake} defaultValue={new Map([['a', 1], ['b', 2]])} />
    )

    fake.lastArg.unset('a')
    assert.deepEqual(fake.lastArg.value, new Map([['b', 2]]))
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
