import assert from 'assert'
import React from 'react'
import sinon from 'sinon'
import { NumberValue, createNumberValue } from '../../src'
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

  it('min', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<NumberValue children={fake} min={0} />)
    fake.lastArg.decrement()
    assert.equal(fake.lastArg.value, 0)
  })

  it('max', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<NumberValue children={fake} max={0} />)
    fake.lastArg.increment()
    assert.equal(fake.lastArg.value, 0)
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

  it('controlled', () => {
    const fake = sinon.fake.returns(null)
    const onChange = sinon.fake()
    const renderer = Renderer.create(
      <NumberValue children={fake} value={42} onChange={onChange} />
    )

    renderer.update(
      <NumberValue children={fake} value={7} onChange={onChange} />
    )

    fake.lastArg.increment()
    assert.deepEqual(onChange.lastArg, 8)
  })

  it('connected', () => {
    const Connected = createNumberValue(42)
    const one = sinon.fake.returns(null)
    const two = sinon.fake.returns(null)

    Renderer.create(
      <React.Fragment>
        <Connected children={one} />
        <Connected children={two} />
      </React.Fragment>
    )

    assert.equal(one.lastArg.value, 42)
    assert.equal(two.lastArg.value, 42)
    one.lastArg.increment()
    assert.equal(one.lastArg.value, 43)
    assert.equal(two.lastArg.value, 43)
    two.lastArg.decrement(10)
    assert.equal(one.lastArg.value, 33)
    assert.equal(two.lastArg.value, 33)
  })
})
