import assert from 'assert'
import React from 'react'
import sinon from 'sinon'
import { Value, createValue } from '../../src'
import Renderer from 'react-test-renderer'

describe('<Value>', () => {
  it('initialize', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<Value children={fake} />)
    assert.equal(fake.lastArg.value, undefined)
  })

  it('value', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<Value children={fake} value={42} />)
    assert.equal(fake.lastArg.value, 42)
  })

  it('defaultValue', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<Value children={fake} defaultValue={42} />)
    assert.equal(fake.lastArg.value, 42)
  })

  it('set(value)', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<Value children={fake} />)
    fake.lastArg.set(true)
    assert.equal(fake.lastArg.value, true)
    fake.lastArg.set('value')
    assert.equal(fake.lastArg.value, 'value')
  })

  it('reset()', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<Value children={fake} defaultValue={42} />)
    fake.lastArg.set(true)
    fake.lastArg.reset()
    assert.equal(fake.lastArg.value, 42)
  })

  it('clear()', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<Value children={fake} defaultValue={42} />)
    fake.lastArg.set(true)
    fake.lastArg.clear()
    assert.equal(fake.lastArg.value, undefined)
  })

  it('onChange', () => {
    const fake = sinon.fake.returns(null)
    const onChange = sinon.fake()
    Renderer.create(<Value children={fake} onChange={onChange} />)
    fake.lastArg.set(42)
    assert.equal(onChange.lastArg, 42)
  })

  it('render', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<Value render={fake} value={42} />)
    assert.equal(fake.lastArg.value, 42)
  })

  it('enabled', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<Value children={fake} />)
    assert.equal(fake.lastArg.disabled, false)
  })

  it('disabled', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<Value children={fake} disabled />)
    const { callCount } = fake
    fake.lastArg.set(true)
    assert.equal(fake.lastArg.disabled, true)
    assert.notEqual(fake.lastArg.value, true)
    assert.equal(fake.callCount, callCount)
  })

  it('connected', () => {
    const Connected = createValue(false)
    const one = sinon.fake.returns(null)
    const two = sinon.fake.returns(null)

    Renderer.create(
      <React.Fragment>
        <Connected children={one} />
        <Connected children={two} />
      </React.Fragment>
    )

    assert.equal(one.lastArg.value, false)
    assert.equal(two.lastArg.value, false)
    one.lastArg.set(true)
    assert.equal(one.lastArg.value, true)
    assert.equal(two.lastArg.value, true)
    two.lastArg.set(false)
    assert.equal(one.lastArg.value, false)
    assert.equal(two.lastArg.value, false)
  })

  it('connected static', () => {
    const Connected = createValue(false)
    const one = sinon.fake.returns(null)
    const two = sinon.fake.returns(null)

    Renderer.create(
      <React.Fragment>
        <Connected children={one} />
        <Connected children={two} />
      </React.Fragment>
    )

    assert.equal(one.lastArg.value, false)
    assert.equal(two.lastArg.value, false)
    Connected.set(true)
    assert.equal(one.lastArg.value, true)
    assert.equal(two.lastArg.value, true)
  })
})
