import assert from 'assert'
import React from 'react'
import sinon from 'sinon'
import { BooleanValue } from '../../src'
import Renderer from 'react-test-renderer'

describe('<BooleanValue>', () => {
  it('value', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<BooleanValue children={fake} />)
    assert.equal(fake.lastArg.value, false)
  })

  it('set(boolean)', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<BooleanValue children={fake} />)
    fake.lastArg.set(true)
    assert.equal(fake.lastArg.value, true)
  })

  it('reset', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<BooleanValue children={fake} />)
    fake.lastArg.set(true)
    fake.lastArg.reset()
    assert.equal(fake.lastArg.value, false)
  })

  it('toggle', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<BooleanValue children={fake} />)
    fake.lastArg.toggle()
    assert.equal(fake.lastArg.value, true)
    fake.lastArg.toggle()
    assert.equal(fake.lastArg.value, false)
  })
})
