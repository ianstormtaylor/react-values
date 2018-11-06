import assert from 'assert'
import React from 'react'
import sinon from 'sinon'
import { StringValue, createStringValue } from '../../src'
import Renderer from 'react-test-renderer'

describe('<StringValue>', () => {
  it('initialize', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<StringValue children={fake} />)
    assert.equal(fake.lastArg.value, '')
  })

  it('value', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<StringValue children={fake} value={'a'} />)
    assert.equal(fake.lastArg.value, 'a')
  })

  it('defaultValue', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<StringValue children={fake} defaultValue={'a'} />)
    assert.equal(fake.lastArg.value, 'a')
  })

  it('set(value)', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<StringValue children={fake} />)
    fake.lastArg.set('a')
    assert.equal(fake.lastArg.value, 'a')
    fake.lastArg.set('b')
    assert.equal(fake.lastArg.value, 'b')
  })

  it('reset()', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<StringValue children={fake} defaultValue={'a'} />)
    fake.lastArg.set('b')
    fake.lastArg.reset()
    assert.equal(fake.lastArg.value, 'a')
  })

  it('clear()', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<StringValue children={fake} defaultValue={'a'} />)
    fake.lastArg.set('b')
    fake.lastArg.clear()
    assert.equal(fake.lastArg.value, '')
  })

  it('concat()', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<StringValue children={fake} defaultValue={'abc'} />)
    fake.lastArg.concat('def')
    assert.equal(fake.lastArg.value, 'abcdef')
  })

  it('padEnd()', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<StringValue children={fake} defaultValue={'abc'} />)
    fake.lastArg.padEnd(7)
    assert.equal(fake.lastArg.value, 'abc    ')
  })

  it('padStart()', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<StringValue children={fake} defaultValue={'abc'} />)
    fake.lastArg.padStart(7)
    assert.equal(fake.lastArg.value, '    abc')
  })

  it('repeat()', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<StringValue children={fake} defaultValue={'abc'} />)
    fake.lastArg.repeat(3)
    assert.equal(fake.lastArg.value, 'abcabcabc')
  })

  it('replace()', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<StringValue children={fake} defaultValue={'abc'} />)
    fake.lastArg.replace('b', 'z')
    assert.equal(fake.lastArg.value, 'azc')
  })

  it('slice()', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<StringValue children={fake} defaultValue={'abc'} />)
    fake.lastArg.slice(1)
    assert.equal(fake.lastArg.value, 'bc')
  })

  it('substr()', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<StringValue children={fake} defaultValue={'abc'} />)
    fake.lastArg.substr(0, 2)
    assert.equal(fake.lastArg.value, 'ab')
  })

  it('substring()', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<StringValue children={fake} defaultValue={'abc'} />)
    fake.lastArg.substring(1, 2)
    assert.equal(fake.lastArg.value, 'b')
  })

  it('toLowerCase()', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<StringValue children={fake} defaultValue={'ABC'} />)
    fake.lastArg.toLowerCase()
    assert.equal(fake.lastArg.value, 'abc')
  })

  it('toUpperCase()', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<StringValue children={fake} defaultValue={'abc'} />)
    fake.lastArg.toUpperCase()
    assert.equal(fake.lastArg.value, 'ABC')
  })

  it('trim()', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<StringValue children={fake} defaultValue={'  abc  '} />)
    fake.lastArg.trim()
    assert.equal(fake.lastArg.value, 'abc')
  })

  it.skip('trimEnd()', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<StringValue children={fake} defaultValue={'  abc  '} />)
    fake.lastArg.trimEnd()
    assert.equal(fake.lastArg.value, '  abc')
  })

  it.skip('trimStart()', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<StringValue children={fake} defaultValue={'  abc  '} />)
    fake.lastArg.trimStart()
    assert.equal(fake.lastArg.value, 'abc  ')
  })

  it('onChange', () => {
    const fake = sinon.fake.returns(null)
    const onChange = sinon.fake()
    Renderer.create(<StringValue children={fake} onChange={onChange} />)
    fake.lastArg.set('a')
    assert.equal(onChange.lastArg, 'a')
  })

  it('render', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<StringValue render={fake} />)
    assert.equal(fake.lastArg.value, '')
  })

  it('controlled', () => {
    const fake = sinon.fake.returns(null)
    const onChange = sinon.fake()
    const renderer = Renderer.create(
      <StringValue children={fake} value={'a'} onChange={onChange} />
    )

    renderer.update(
      <StringValue children={fake} value={'ab'} onChange={onChange} />
    )

    fake.lastArg.padStart(3)
    assert.deepEqual(onChange.lastArg, ' ab')
  })

  it('connected', () => {
    const Connected = createStringValue('abc')
    const one = sinon.fake.returns(null)
    const two = sinon.fake.returns(null)

    Renderer.create(
      <React.Fragment>
        <Connected children={one} />
        <Connected children={two} />
      </React.Fragment>
    )

    assert.equal(one.lastArg.value, 'abc')
    assert.equal(two.lastArg.value, 'abc')
    one.lastArg.repeat(2)
    assert.equal(one.lastArg.value, 'abcabc')
    assert.equal(two.lastArg.value, 'abcabc')
    two.lastArg.slice(0, 4)
    assert.equal(one.lastArg.value, 'abca')
    assert.equal(two.lastArg.value, 'abca')
  })
})
