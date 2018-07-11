import assert from 'assert'
import React from 'react'
import sinon from 'sinon'
import { DateValue } from '../../src'
import Renderer from 'react-test-renderer'

describe('<DateValue>', () => {
  it('initialize', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<DateValue children={fake} />)
    const actual = fake.lastArg.value.toISOString().slice(0, 10)
    const expected = new Date().toISOString().slice(0, 10)
    assert.deepEqual(actual, expected)
  })

  it('value', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<DateValue children={fake} value={new Date(0)} />)
    assert.deepEqual(fake.lastArg.value, new Date(0))
  })

  it('defaultValue', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<DateValue children={fake} defaultValue={new Date(0)} />)
    assert.deepEqual(fake.lastArg.value, new Date(0))
  })

  it('set(value)', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<DateValue children={fake} />)
    fake.lastArg.set(new Date(0))
    assert.deepEqual(fake.lastArg.value, new Date(0))
    fake.lastArg.set(new Date(1000))
    assert.deepEqual(fake.lastArg.value, new Date(1000))
  })

  it('reset()', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<DateValue children={fake} defaultValue={new Date(0)} />)
    fake.lastArg.set(new Date(1000))
    fake.lastArg.reset()
    assert.deepEqual(fake.lastArg.value, new Date(0))
  })

  it('clear()', () => {
    const fake = sinon.fake.returns(null)
    Renderer.create(<DateValue children={fake} defaultValue={new Date(0)} />)
    fake.lastArg.set(new Date(1000))
    fake.lastArg.clear()
    const actual = fake.lastArg.value.toISOString().slice(0, 10)
    const expected = new Date().toISOString().slice(0, 10)
    assert.deepEqual(actual, expected)
  })

  it('year', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <DateValue
        children={fake}
        defaultValue={new Date('2000-12-20T13:42:21.293')}
      />
    )

    assert.deepEqual(fake.lastArg.year, 2000)
  })

  it('month', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <DateValue
        children={fake}
        defaultValue={new Date('2000-12-20T13:42:21.293')}
      />
    )

    assert.deepEqual(fake.lastArg.month, 11)
  })

  it('date', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <DateValue
        children={fake}
        defaultValue={new Date('2000-12-20T13:42:21.293')}
      />
    )

    assert.deepEqual(fake.lastArg.date, 20)
  })

  it('hours', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <DateValue
        children={fake}
        defaultValue={new Date('2000-12-20T13:42:21.293')}
      />
    )

    assert.deepEqual(fake.lastArg.hours, 13)
  })

  it('minutes', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <DateValue
        children={fake}
        defaultValue={new Date('2000-12-20T13:42:21.293')}
      />
    )

    assert.deepEqual(fake.lastArg.minutes, 42)
  })

  it('seconds', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <DateValue
        children={fake}
        defaultValue={new Date('2000-12-20T13:42:21.293')}
      />
    )

    assert.deepEqual(fake.lastArg.seconds, 21)
  })

  it('milliseconds', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <DateValue
        children={fake}
        defaultValue={new Date('2000-12-20T13:42:21.293')}
      />
    )

    assert.deepEqual(fake.lastArg.milliseconds, 293)
  })

  it('setYear(n) (mutates)', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <DateValue
        children={fake}
        defaultValue={new Date('2000-12-20T13:42:21')}
      />
    )

    const previous = fake.lastArg.value
    fake.lastArg.setYear(1999)
    const { value } = fake.lastArg
    assert.deepEqual(value, new Date('1999-12-20T13:42:21'))
    assert.notEqual(value, previous)
  })

  it('setMonth(n)', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <DateValue
        children={fake}
        defaultValue={new Date('2000-12-20T13:42:21')}
      />
    )

    fake.lastArg.setMonth(7)
    assert.deepEqual(fake.lastArg.value, new Date('2000-08-20T13:42:21'))
  })

  it('setMonth(n) (bug-fixed)', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <DateValue
        children={fake}
        defaultValue={new Date('2000-12-31T13:42:21')}
      />
    )

    fake.lastArg.setMonth(1)
    assert.deepEqual(fake.lastArg.value, new Date('2000-02-29T13:42:21'))
  })

  it('setDate(n) (mutates)', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <DateValue
        children={fake}
        defaultValue={new Date('2000-12-20T13:42:21')}
      />
    )

    const previous = fake.lastArg.value
    fake.lastArg.setDate(10)
    const { value } = fake.lastArg
    assert.deepEqual(value, new Date('2000-12-10T13:42:21'))
    assert.notEqual(value, previous)
  })

  it('setHours(n) (mutates)', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <DateValue
        children={fake}
        defaultValue={new Date('2000-12-20T13:42:21')}
      />
    )

    const previous = fake.lastArg.value
    fake.lastArg.setHours(10)
    const { value } = fake.lastArg
    assert.deepEqual(value, new Date('2000-12-20T10:42:21'))
    assert.notEqual(value, previous)
  })

  it('setMinutes(n) (mutates)', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <DateValue
        children={fake}
        defaultValue={new Date('2000-12-20T13:42:21')}
      />
    )

    const previous = fake.lastArg.value
    fake.lastArg.setMinutes(10)
    const { value } = fake.lastArg
    assert.deepEqual(value, new Date('2000-12-20T13:10:21'))
    assert.notEqual(value, previous)
  })

  it('setSeconds(n) (mutates)', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <DateValue
        children={fake}
        defaultValue={new Date('2000-12-20T13:42:21')}
      />
    )

    const previous = fake.lastArg.value
    fake.lastArg.setSeconds(10)
    const { value } = fake.lastArg
    assert.deepEqual(value, new Date('2000-12-20T13:42:10'))
    assert.notEqual(value, previous)
  })

  it('setMilliseconds(n) (mutates)', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <DateValue
        children={fake}
        defaultValue={new Date('2000-12-20T13:42:21.293')}
      />
    )

    const previous = fake.lastArg.value
    fake.lastArg.setMilliseconds(10)
    const { value } = fake.lastArg
    assert.deepEqual(value, new Date('2000-12-20T13:42:21.010'))
    assert.notEqual(value, previous)
  })

  it('incrementYear()', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <DateValue
        children={fake}
        defaultValue={new Date('2000-12-20T13:42:21')}
      />
    )

    fake.lastArg.incrementYear()
    assert.deepEqual(fake.lastArg.value, new Date('2001-12-20T13:42:21'))
  })

  it('incrementYear(n)', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <DateValue
        children={fake}
        defaultValue={new Date('2000-12-20T13:42:21')}
      />
    )

    fake.lastArg.incrementYear(2)
    assert.deepEqual(fake.lastArg.value, new Date('2002-12-20T13:42:21'))
  })

  it('incrementMonth()', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <DateValue
        children={fake}
        defaultValue={new Date('2000-12-20T13:42:21')}
      />
    )

    fake.lastArg.incrementMonth()
    assert.deepEqual(fake.lastArg.value, new Date('2001-01-20T13:42:21'))
  })

  it('incrementMonth(n)', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <DateValue
        children={fake}
        defaultValue={new Date('2000-12-20T13:42:21')}
      />
    )

    fake.lastArg.incrementMonth(2)
    assert.deepEqual(fake.lastArg.value, new Date('2001-02-20T13:42:21'))
  })

  it('incrementMonth(n) (bug-fixed)', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <DateValue
        children={fake}
        defaultValue={new Date('2000-12-31T13:42:21')}
      />
    )

    fake.lastArg.incrementMonth(2)
    assert.deepEqual(fake.lastArg.value, new Date('2001-02-28T13:42:21'))
  })

  it('incrementDate()', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <DateValue
        children={fake}
        defaultValue={new Date('2000-12-20T13:42:21')}
      />
    )

    fake.lastArg.incrementDate()
    assert.deepEqual(fake.lastArg.value, new Date('2000-12-21T13:42:21'))
  })

  it('incrementDate(n)', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <DateValue
        children={fake}
        defaultValue={new Date('2000-12-20T13:42:21')}
      />
    )

    fake.lastArg.incrementDate(2)
    assert.deepEqual(fake.lastArg.value, new Date('2000-12-22T13:42:21'))
  })

  it('incrementHours()', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <DateValue
        children={fake}
        defaultValue={new Date('2000-12-20T13:42:21')}
      />
    )

    fake.lastArg.incrementHours()
    assert.deepEqual(fake.lastArg.value, new Date('2000-12-20T14:42:21'))
  })

  it('incrementHours(n)', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <DateValue
        children={fake}
        defaultValue={new Date('2000-12-20T13:42:21')}
      />
    )

    fake.lastArg.incrementHours(2)
    assert.deepEqual(fake.lastArg.value, new Date('2000-12-20T15:42:21'))
  })

  it('incrementMinutes()', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <DateValue
        children={fake}
        defaultValue={new Date('2000-12-20T13:42:21')}
      />
    )

    fake.lastArg.incrementMinutes()
    assert.deepEqual(fake.lastArg.value, new Date('2000-12-20T13:43:21'))
  })

  it('incrementMinutes(n)', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <DateValue
        children={fake}
        defaultValue={new Date('2000-12-20T13:42:21')}
      />
    )

    fake.lastArg.incrementMinutes(2)
    assert.deepEqual(fake.lastArg.value, new Date('2000-12-20T13:44:21'))
  })

  it('incrementSeconds()', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <DateValue
        children={fake}
        defaultValue={new Date('2000-12-20T13:42:21')}
      />
    )

    fake.lastArg.incrementSeconds()
    assert.deepEqual(fake.lastArg.value, new Date('2000-12-20T13:42:22'))
  })

  it('incrementSeconds(n)', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <DateValue
        children={fake}
        defaultValue={new Date('2000-12-20T13:42:21')}
      />
    )

    fake.lastArg.incrementSeconds(2)
    assert.deepEqual(fake.lastArg.value, new Date('2000-12-20T13:42:23'))
  })

  it('incrementMilliseconds()', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <DateValue
        children={fake}
        defaultValue={new Date('2000-12-20T13:42:21.293')}
      />
    )

    fake.lastArg.incrementMilliseconds()
    assert.deepEqual(fake.lastArg.value, new Date('2000-12-20T13:42:21.294'))
  })

  it('incrementMilliseconds(n)', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <DateValue
        children={fake}
        defaultValue={new Date('2000-12-20T13:42:21.293')}
      />
    )

    fake.lastArg.incrementMilliseconds(2)
    assert.deepEqual(fake.lastArg.value, new Date('2000-12-20T13:42:21.295'))
  })

  it('decrementYear()', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <DateValue
        children={fake}
        defaultValue={new Date('2000-12-20T13:42:21')}
      />
    )

    fake.lastArg.decrementYear()
    assert.deepEqual(fake.lastArg.value, new Date('1999-12-20T13:42:21'))
  })

  it('decrementYear(n)', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <DateValue
        children={fake}
        defaultValue={new Date('2000-12-20T13:42:21')}
      />
    )

    fake.lastArg.decrementYear(2)
    assert.deepEqual(fake.lastArg.value, new Date('1998-12-20T13:42:21'))
  })

  it('decrementMonth()', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <DateValue
        children={fake}
        defaultValue={new Date('2000-12-20T13:42:21')}
      />
    )

    fake.lastArg.decrementMonth()
    assert.deepEqual(fake.lastArg.value, new Date('2000-11-20T13:42:21'))
  })

  it('decrementMonth(n)', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <DateValue
        children={fake}
        defaultValue={new Date('2000-12-20T13:42:21')}
      />
    )

    fake.lastArg.decrementMonth(2)
    assert.deepEqual(fake.lastArg.value, new Date('2000-10-20T13:42:21'))
  })

  it('decrementMonth(n) (bug-fixed)', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <DateValue
        children={fake}
        defaultValue={new Date('2000-04-30T13:42:21')}
      />
    )

    fake.lastArg.decrementMonth(2)
    assert.deepEqual(fake.lastArg.value, new Date('2000-02-29T13:42:21'))
  })

  it('decrementDate()', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <DateValue
        children={fake}
        defaultValue={new Date('2000-12-20T13:42:21')}
      />
    )

    fake.lastArg.decrementDate()
    assert.deepEqual(fake.lastArg.value, new Date('2000-12-19T13:42:21'))
  })

  it('decrementDate(n)', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <DateValue
        children={fake}
        defaultValue={new Date('2000-12-20T13:42:21')}
      />
    )

    fake.lastArg.decrementDate(2)
    assert.deepEqual(fake.lastArg.value, new Date('2000-12-18T13:42:21'))
  })

  it('decrementHours()', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <DateValue
        children={fake}
        defaultValue={new Date('2000-12-20T13:42:21')}
      />
    )

    fake.lastArg.decrementHours()
    assert.deepEqual(fake.lastArg.value, new Date('2000-12-20T12:42:21'))
  })

  it('decrementHours(n)', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <DateValue
        children={fake}
        defaultValue={new Date('2000-12-20T13:42:21')}
      />
    )

    fake.lastArg.decrementHours(2)
    assert.deepEqual(fake.lastArg.value, new Date('2000-12-20T11:42:21'))
  })

  it('decrementMinutes()', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <DateValue
        children={fake}
        defaultValue={new Date('2000-12-20T13:42:21')}
      />
    )

    fake.lastArg.decrementMinutes()
    assert.deepEqual(fake.lastArg.value, new Date('2000-12-20T13:41:21'))
  })

  it('decrementMinutes(n)', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <DateValue
        children={fake}
        defaultValue={new Date('2000-12-20T13:42:21')}
      />
    )

    fake.lastArg.decrementMinutes(2)
    assert.deepEqual(fake.lastArg.value, new Date('2000-12-20T13:40:21'))
  })

  it('decrementSeconds()', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <DateValue
        children={fake}
        defaultValue={new Date('2000-12-20T13:42:21')}
      />
    )

    fake.lastArg.decrementSeconds()
    assert.deepEqual(fake.lastArg.value, new Date('2000-12-20T13:42:20'))
  })

  it('decrementSeconds(n)', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <DateValue
        children={fake}
        defaultValue={new Date('2000-12-20T13:42:21')}
      />
    )

    fake.lastArg.decrementSeconds(2)
    assert.deepEqual(fake.lastArg.value, new Date('2000-12-20T13:42:19'))
  })

  it('decrementMilliseconds()', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <DateValue
        children={fake}
        defaultValue={new Date('2000-12-20T13:42:21.293')}
      />
    )

    fake.lastArg.decrementMilliseconds()
    assert.deepEqual(fake.lastArg.value, new Date('2000-12-20T13:42:21.292'))
  })

  it('decrementMilliseconds(n)', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(
      <DateValue
        children={fake}
        defaultValue={new Date('2000-12-20T13:42:21.293')}
      />
    )

    fake.lastArg.decrementMilliseconds(2)
    assert.deepEqual(fake.lastArg.value, new Date('2000-12-20T13:42:21.291'))
  })

  it('onChange', () => {
    const fake = sinon.fake.returns(null)
    const onChange = sinon.fake()
    Renderer.create(<DateValue children={fake} onChange={onChange} />)
    fake.lastArg.set(new Date(0))
    assert.deepEqual(onChange.lastArg, new Date(0))
  })

  it('render', () => {
    const fake = sinon.fake.returns(null)

    Renderer.create(<DateValue render={fake} value={new Date(0)} />)

    assert.deepEqual(fake.lastArg.value, new Date(0))
  })
})
