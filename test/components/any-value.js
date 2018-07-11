import assert from 'assert'
import React from 'react'
import sinon from 'sinon'
import { AnyValue } from '../../src'
import Renderer from 'react-test-renderer'

describe('<AnyValue>', () => {
  it('initialize', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<AnyValue children={fake} />)
    assert.equal(fake.lastArg.value, undefined)
  })

  it('value', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<AnyValue children={fake} value={42} />)
    assert.equal(fake.lastArg.value, 42)
  })

  it('defaultValue', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<AnyValue children={fake} defaultValue={42} />)
    assert.equal(fake.lastArg.value, 42)
  })

  it('set(value)', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<AnyValue children={fake} />)
    fake.lastArg.set(true)
    assert.equal(fake.lastArg.value, true)
    fake.lastArg.set('value')
    assert.equal(fake.lastArg.value, 'value')
  })

  it('reset()', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<AnyValue children={fake} defaultValue={42} />)
    fake.lastArg.set(true)
    fake.lastArg.reset()
    assert.equal(fake.lastArg.value, 42)
  })

  it('clear()', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<AnyValue children={fake} defaultValue={42} />)
    fake.lastArg.set(true)
    fake.lastArg.clear()
    assert.equal(fake.lastArg.value, undefined)
  })

  it('onChange', () => {
    const fake = sinon.fake.returns(null)
    const onChange = sinon.fake()
    Renderer.create(<AnyValue children={fake} onChange={onChange} />)
    fake.lastArg.set(42)
    assert.equal(onChange.lastArg, 42)
  })

  it('render', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<AnyValue render={fake} value={42} />)
    assert.equal(fake.lastArg.value, 42)
  })

  it('enabled', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<AnyValue children={fake} />)
    assert.equal(fake.lastArg.disabled, false)
  })

  it('disabled', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<AnyValue children={fake} disabled />)
    const { callCount } = fake
    fake.lastArg.set(true)
    assert.equal(fake.lastArg.disabled, true)
    assert.notEqual(fake.lastArg.value, true)
    assert.equal(fake.callCount, callCount)
  })
})
