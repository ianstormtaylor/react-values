import React from 'react'
import {
  addDays,
  addHours,
  addMilliseconds,
  addMinutes,
  addMonths,
  addSeconds,
  addYears,
  getDate,
  getHours,
  getMilliseconds,
  getMinutes,
  getMonth,
  getSeconds,
  getYear,
  setDate,
  setHours,
  setMilliseconds,
  setMinutes,
  setMonth,
  setSeconds,
  setYear,
} from 'date-fns'

import AnyValue from './any-value'
import defaults from '../utils/defaults'
import render from '../utils/render'

const DateValue = props => (
  <AnyValue {...props} {...defaults(props, new Date())}>
    {value =>
      render(props, {
        ...value,
        date: getDate(value.value),
        hours: getHours(value.value),
        milliseconds: getMilliseconds(value.value),
        minutes: getMinutes(value.value),
        month: getMonth(value.value),
        seconds: getSeconds(value.value),
        year: getYear(value.value),
        set: (param, val) => {
          return arguments.length === 2
            ? value.set(param)
            : value.set(v => {
                const [get, fn] = helpers(param)
                const next = typeof val === 'function' ? val(get(v)) : val
                return fn(v, next)
              })
        },
        increment: (param, n = 1) => {
          return arguments.length === 2
            ? value.set(v => new Date(v + param))
            : value.set(v => {
                const [, , fn] = helpers(param)
                return fn(v, n)
              })
        },
        decrement: (param, n = 1) => {
          return arguments.length === 2
            ? value.set(v => new Date(v - param))
            : value.set(v => {
                const [, , fn] = helpers(param)
                return fn(v, 0 - n)
              })
        },
      })
    }
  </AnyValue>
)

function helpers(param) {
  switch (param) {
    case 'date':
      return [getDate, setDate, addDays]
    case 'hours':
      return [getHours, setHours, addHours]
    case 'milliseconds':
      return [getMilliseconds, setMilliseconds, addMilliseconds]
    case 'minutes':
      return [getMinutes, setMinutes, addMinutes]
    case 'month':
      return [getMonth, setMonth, addMonths]
    case 'seconds':
      return [getSeconds, setSeconds, addSeconds]
    case 'year':
      return [getYear, setYear, addYears]
    default:
      throw new Error(`Unknown date property parameter: "${param}`)
  }
}

export default DateValue
