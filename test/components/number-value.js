import assert from 'assert'
import React from 'react'
import sinon from 'sinon'
import { NumberValue } from '../../src'
import Renderer from 'react-test-renderer'

describe('<NumberValue>', () => {
  it('initialize', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<NumberValue children={fake} />)
    assert.equal(fake.lastArg.value, 0)
  })

  it('value', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<NumberValue children={fake} value={42} />)
    assert.equal(fake.lastArg.value, 42)
  })

  it('defaultValue', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<NumberValue children={fake} defaultValue={42} />)
    assert.equal(fake.lastArg.value, 42)
  })

  it('set(value)', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<NumberValue children={fake} />)
    fake.lastArg.set(10)
    assert.equal(fake.lastArg.value, 10)
    fake.lastArg.set(20)
    assert.equal(fake.lastArg.value, 20)
  })

  it('reset()', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<NumberValue children={fake} defaultValue={42} />)
    fake.lastArg.set(0)
    fake.lastArg.reset()
    assert.equal(fake.lastArg.value, 42)
  })

  it('clear()', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<NumberValue children={fake} defaultValue={42} />)
    fake.lastArg.set(10)
    fake.lastArg.clear()
    assert.equal(fake.lastArg.value, 0)
  })

  it('increment()', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<NumberValue children={fake} />)
    fake.lastArg.increment()
    assert.equal(fake.lastArg.value, 1)
    fake.lastArg.increment()
    assert.equal(fake.lastArg.value, 2)
  })

  it('increment(n)', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<NumberValue children={fake} />)
    fake.lastArg.increment(5)
    assert.equal(fake.lastArg.value, 5)
    fake.lastArg.increment(5)
    assert.equal(fake.lastArg.value, 10)
  })

  it('decrement()', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<NumberValue children={fake} />)
    fake.lastArg.decrement()
    assert.equal(fake.lastArg.value, -1)
    fake.lastArg.decrement()
    assert.equal(fake.lastArg.value, -2)
  })

  it('decrement(n)', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<NumberValue children={fake} />)
    fake.lastArg.decrement(5)
    assert.equal(fake.lastArg.value, -5)
    fake.lastArg.decrement(5)
    assert.equal(fake.lastArg.value, -10)
  })

  it('onChange', () => {
    const fake = sinon.fake.returns(null)
    const onChange = sinon.fake()
    Renderer.create(<NumberValue children={fake} onChange={onChange} />)
    fake.lastArg.set(42)
    assert.equal(onChange.lastArg, 42)
  })

  it('render', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<NumberValue render={fake} />)
    assert.equal(fake.lastArg.value, 0)
  })
})
