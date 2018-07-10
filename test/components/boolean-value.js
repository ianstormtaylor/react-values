import assert from 'assert'
import React from 'react'
import sinon from 'sinon'
import { BooleanValue } from '../../src'
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
})
