import assert from 'assert'
import React from 'react'
import sinon from 'sinon'
import { BooleanValue, createBooleanValue } from '../../src'
import Renderer from 'react-test-renderer'

describe('<BooleanValue>', () => {
  it('initialize', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<BooleanValue children={fake} />)
    assert.equal(fake.lastArg.value, false)
  })

  it('value', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<BooleanValue children={fake} value />)
    assert.equal(fake.lastArg.value, true)
  })

  it('defaultValue', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<BooleanValue children={fake} defaultValue />)
    assert.equal(fake.lastArg.value, true)
  })

  it('set(boolean)', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<BooleanValue children={fake} />)
    fake.lastArg.set(true)
    assert.equal(fake.lastArg.value, true)
    fake.lastArg.set(false)
    assert.equal(fake.lastArg.value, false)
  })

  it('reset()', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<BooleanValue children={fake} defaultValue />)
    fake.lastArg.set(false)
    fake.lastArg.reset()
    assert.equal(fake.lastArg.value, true)
  })

  it('clear()', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<BooleanValue children={fake} defaultValue />)
    fake.lastArg.clear()
    assert.equal(fake.lastArg.value, false)
  })

  it('toggle()', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<BooleanValue children={fake} />)
    fake.lastArg.toggle()
    assert.equal(fake.lastArg.value, true)
    fake.lastArg.toggle()
    assert.equal(fake.lastArg.value, false)
  })

  it('render', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<BooleanValue render={fake} />)
    assert.equal(fake.lastArg.value, false)
  })

  it('controlled', () => {
    const fake = sinon.fake.returns(null)
    const onChange = sinon.fake()
    const renderer = Renderer.create(
      <BooleanValue children={fake} value onChange={onChange} />
    )

    renderer.update(
      <BooleanValue children={fake} value={false} onChange={onChange} />
    )

    fake.lastArg.toggle()
    assert.deepEqual(onChange.lastArg, true)
  })

  it('connected', () => {
    const Connected = createBooleanValue(false)
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
})
