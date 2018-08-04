import assert from 'assert'
import React from 'react'
import sinon from 'sinon'
import { SetValue, createSetValue } from '../../src'
import Renderer from 'react-test-renderer'

describe('<SetValue>', () => {
  it('initialize', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<SetValue children={fake} />)
    assert.deepEqual(fake.lastArg.value, new Set())
  })

  it('value', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<SetValue children={fake} value={new Set([1])} />)
    assert.deepEqual(fake.lastArg.value, new Set([1]))
  })

  it('defaultValue', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<SetValue children={fake} defaultValue={new Set([1])} />)
    assert.deepEqual(fake.lastArg.value, new Set([1]))
  })

  it('set(value)', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<SetValue children={fake} />)
    fake.lastArg.set(new Set([1]))
    assert.deepEqual(fake.lastArg.value, new Set([1]))
    fake.lastArg.set(new Set([2]))
    assert.deepEqual(fake.lastArg.value, new Set([2]))
  })

  it('reset() (mutates)', () => {
    const fake = sinon.fake.returns(null)
    const initial = new Set([1])
    Renderer.create(<SetValue children={fake} defaultValue={initial} />)
    fake.lastArg.set(new Set([2]))
    fake.lastArg.reset()
    const { value } = fake.lastArg
    assert.deepEqual(value, new Set([1]))
    assert.notEqual(value, initial)
  })

  it('clear() (mutates)', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<SetValue children={fake} defaultValue={new Set([1])} />)
    fake.lastArg.set(new Set([2]))
    const previous = fake.lastArg.value
    fake.lastArg.clear()
    const { value } = fake.lastArg
    assert.deepEqual(value, new Set())
    assert.notEqual(value, previous)
  })

  it('add(val)', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<SetValue children={fake} />)
    fake.lastArg.add(2)
    assert.deepEqual(fake.lastArg.value, new Set([2]))
  })

  it('delete(val) (mutates)', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<SetValue children={fake} defaultValue={new Set([1, 2])} />)
    const previous = fake.lastArg.value
    fake.lastArg.delete(1)
    const { value } = fake.lastArg
    assert.deepEqual(value, new Set([2]))
    assert.notEqual(value, previous)
  })

  it('remove(val) (alias) (mutates)', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<SetValue children={fake} defaultValue={new Set([1, 2])} />)
    const previous = fake.lastArg.value
    fake.lastArg.remove(1)
    const { value } = fake.lastArg
    assert.deepEqual(value, new Set([2]))
    assert.notEqual(value, previous)
  })

  it('toggle(val, boolean)', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<SetValue children={fake} defaultValue={new Set([1, 2])} />)
    fake.lastArg.toggle(1, false)
    assert.deepEqual(fake.lastArg.value, new Set([2]))
    fake.lastArg.toggle(1, true)
    assert.deepEqual(fake.lastArg.value, new Set([2, 1]))
  })

  it('onChange', () => {
    const fake = sinon.fake.returns(null)
    const onChange = sinon.fake()
    Renderer.create(<SetValue children={fake} onChange={onChange} />)
    fake.lastArg.set(new Set([1]))
    assert.deepEqual(onChange.lastArg, new Set([1]))
  })

  it('render', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<SetValue render={fake} />)
    assert.deepEqual(fake.lastArg.value, new Set())
  })

  it('connected', () => {
    const Connected = createSetValue(new Set([1, 2]))
    const one = sinon.fake.returns(null)
    const two = sinon.fake.returns(null)

    Renderer.create(
      <React.Fragment>
        <Connected children={one} />
        <Connected children={two} />
      </React.Fragment>
    )

    assert.deepEqual(one.lastArg.value, new Set([1, 2]))
    assert.deepEqual(two.lastArg.value, new Set([1, 2]))
    one.lastArg.add(3)
    assert.deepEqual(one.lastArg.value, new Set([1, 2, 3]))
    assert.deepEqual(two.lastArg.value, new Set([1, 2, 3]))
    two.lastArg.clear()
    assert.deepEqual(one.lastArg.value, new Set())
    assert.deepEqual(two.lastArg.value, new Set())
  })
})
