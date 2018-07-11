import assert from 'assert'
import React from 'react'
import sinon from 'sinon'
import { SetValue } from '../../src'
import Renderer from 'react-test-renderer'

describe('<SetValue>', () => {
  it('initialize', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<SetValue children={fake} />)
    assert.deepEqual(fake.lastArg.value, new Set())
  })

  it('transform(fn) clones', () => {
    const fake = sinon.fake.returns(null)
    const renderer = Renderer.create(<SetValue children={fake} />)
    const value = new Set()
    const instance = renderer.getInstance()
    instance.transform(() => value)
    instance.transform(() => value)
    assert.deepEqual(instance.value, value)
    assert.notEqual(instance.value, value)
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

  it('reset()', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<SetValue children={fake} defaultValue={new Set([1])} />)
    fake.lastArg.set(new Set([2]))
    fake.lastArg.reset()
    assert.deepEqual(fake.lastArg.value, new Set([1]))
  })

  it('clear()', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<SetValue children={fake} defaultValue={new Set([1])} />)
    fake.lastArg.set(new Set([2]))
    fake.lastArg.clear()
    assert.deepEqual(fake.lastArg.value, new Set())
  })

  it('add(val)', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<SetValue children={fake} />)
    fake.lastArg.add(2)
    assert.deepEqual(fake.lastArg.value, new Set([2]))
  })

  it('delete(val)', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<SetValue children={fake} defaultValue={new Set([1, 2])} />)
    fake.lastArg.delete(1)
    assert.deepEqual(fake.lastArg.value, new Set([2]))
  })

  it('remove(val) (alias)', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<SetValue children={fake} defaultValue={new Set([1, 2])} />)
    fake.lastArg.remove(1)
    assert.deepEqual(fake.lastArg.value, new Set([2]))
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
})
