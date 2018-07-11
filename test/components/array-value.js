import assert from 'assert'
import React from 'react'
import sinon from 'sinon'
import { ArrayValue } from '../../src'
import Renderer from 'react-test-renderer'

describe('<ArrayValue>', () => {
  it('initialize', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<ArrayValue children={fake} />)
    assert.deepEqual(fake.lastArg.value, [])
  })

  it('transform(fn) clones', () => {
    const fake = sinon.fake.returns(null)
    const renderer = Renderer.create(<ArrayValue children={fake} />)
    const value = []
    const instance = renderer.getInstance()
    instance.transform(() => value)
    instance.transform(() => value)
    assert.deepEqual(instance.value, value)
    assert.notEqual(instance.value, value)
  })

  it('value', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<ArrayValue children={fake} value={['a']} />)
    assert.deepEqual(fake.lastArg.value, ['a'])
  })

  it('defaultValue', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<ArrayValue children={fake} defaultValue={['a']} />)
    assert.deepEqual(fake.lastArg.value, ['a'])
  })

  it('first', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<ArrayValue children={fake} value={['a', 'b', 'c']} />)
    assert.deepEqual(fake.lastArg.first, 'a')
  })

  it('first (empty)', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<ArrayValue children={fake} />)
    assert.deepEqual(fake.lastArg.first, undefined)
  })

  it('last', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<ArrayValue children={fake} value={['a', 'b', 'c']} />)
    assert.deepEqual(fake.lastArg.last, 'c')
  })

  it('last (empty)', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<ArrayValue children={fake} />)
    assert.deepEqual(fake.lastArg.last, undefined)
  })

  it('set(value)', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<ArrayValue children={fake} />)
    fake.lastArg.set(['a'])
    assert.deepEqual(fake.lastArg.value, ['a'])
    fake.lastArg.set(['b'])
    assert.deepEqual(fake.lastArg.value, ['b'])
  })

  it('reset()', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<ArrayValue children={fake} defaultValue={['a']} />)
    fake.lastArg.set(['b'])
    fake.lastArg.reset()
    assert.deepEqual(fake.lastArg.value, ['a'])
  })

  it('clear()', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<ArrayValue children={fake} defaultValue={['a']} />)
    fake.lastArg.set(['b'])
    fake.lastArg.clear()
    assert.deepEqual(fake.lastArg.value, [])
  })

  it('concat()', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<ArrayValue children={fake} defaultValue={[0, 1, 2]} />)
    fake.lastArg.concat([3, 4, 5])
    assert.deepEqual(fake.lastArg.value, [0, 1, 2, 3, 4, 5])
  })

  it('fill()', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<ArrayValue children={fake} defaultValue={[0, 1, 2]} />)
    fake.lastArg.fill(true)
    assert.deepEqual(fake.lastArg.value, [true, true, true])
  })

  it('filter(fn)', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <ArrayValue children={fake} defaultValue={['aa', 'ab', 'bb']} />
    )

    fake.lastArg.filter(v => v.includes('a'))
    assert.deepEqual(fake.lastArg.value, ['aa', 'ab'])
  })

  it.skip('flat()', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <ArrayValue children={fake} defaultValue={[['a'], ['b']]} />
    )

    fake.lastArg.flat()
    assert.deepEqual(fake.lastArg.value, ['a', 'b'])
  })

  it.skip('flatMap(fn)', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <ArrayValue children={fake} defaultValue={[['a'], ['b']]} />
    )

    fake.lastArg.flatMap(v => v.repeat(3))
    assert.deepEqual(fake.lastArg.value, ['aaa', 'bbb'])
  })

  it('map(fn)', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<ArrayValue children={fake} defaultValue={['a', 'b']} />)
    fake.lastArg.map(v => v.repeat(3))
    assert.deepEqual(fake.lastArg.value, ['aaa', 'bbb'])
  })

  it('reverse()', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<ArrayValue children={fake} defaultValue={['a', 'b']} />)
    fake.lastArg.reverse()
    assert.deepEqual(fake.lastArg.value, ['b', 'a'])
  })

  it('sort()', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <ArrayValue children={fake} defaultValue={['b', 'c', 'a']} />
    )

    fake.lastArg.sort()
    assert.deepEqual(fake.lastArg.value, ['a', 'b', 'c'])
  })

  it('slice()', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <ArrayValue children={fake} defaultValue={['a', 'b', 'c']} />
    )

    fake.lastArg.slice(1)
    assert.deepEqual(fake.lastArg.value, ['b', 'c'])
  })

  it('push(val)', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <ArrayValue children={fake} defaultValue={['a', 'b', 'c']} />
    )

    fake.lastArg.push('d')
    assert.deepEqual(fake.lastArg.value, ['a', 'b', 'c', 'd'])
  })

  it('pop()', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <ArrayValue children={fake} defaultValue={['a', 'b', 'c']} />
    )

    fake.lastArg.pop()
    assert.deepEqual(fake.lastArg.value, ['a', 'b'])
  })

  it('shift()', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <ArrayValue children={fake} defaultValue={['a', 'b', 'c']} />
    )

    fake.lastArg.shift()
    assert.deepEqual(fake.lastArg.value, ['b', 'c'])
  })

  it('unshift(val)', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <ArrayValue children={fake} defaultValue={['a', 'b', 'c']} />
    )

    fake.lastArg.unshift('d')
    assert.deepEqual(fake.lastArg.value, ['d', 'a', 'b', 'c'])
  })

  it('splice()', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <ArrayValue children={fake} defaultValue={['a', 'b', 'c']} />
    )

    fake.lastArg.splice(1, 1, 'd')
    assert.deepEqual(fake.lastArg.value, ['a', 'd', 'c'])
  })

  it('onChange', () => {
    const fake = sinon.fake.returns(null)
    const onChange = sinon.fake()
    Renderer.create(<ArrayValue children={fake} onChange={onChange} />)
    fake.lastArg.set(['a'])
    assert.deepEqual(onChange.lastArg, ['a'])
  })

  it('render', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<ArrayValue render={fake} />)
    assert.deepEqual(fake.lastArg.value, [])
  })
})
