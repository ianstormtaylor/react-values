import React from 'react'

import AnyValue from './any-value'
import defaults from '../utils/defaults'
import proxy from '../utils/proxy'
import render from '../utils/render'

const DateValue = props => (
  <AnyValue {...props} {...defaults(props, new Date())}>
    {value => {
      const d = value.value
      const date = d.getDate()
      const hours = d.getHours()
      const milliseconds = d.getMilliseconds()
      const minutes = d.getMinutes()
      const month = d.getMonth()
      const seconds = d.getSeconds()
      const year = d.getFullYear()

      const setDate = proxy(value, 'setDate', true)
      const setHours = proxy(value, 'setHours', true)
      const setMilliseconds = proxy(value, 'setMilliseconds', true)
      const setMinutes = proxy(value, 'setMinutes', true)
      const setMonth = m => value.set(v => setMonthHelper(v, m))
      const setSeconds = proxy(value, 'setSeconds', true)
      const setYear = proxy(value, 'setFullYear', true)

      const incrementDate = (n = 1) =>
        setDate(v => {
          v.setDate(date + n)
          return v
        })
      const incrementHours = (n = 1) => incrementMinutes(n * 60)
      const incrementMilliseconds = (n = 1) =>
        value.set(v => new Date(v.getTime() + n))
      const incrementMinutes = (n = 1) => incrementSeconds(n * 60)
      const incrementMonth = (n = 1) => value.set(v => addMonthsHelper(v, n))
      const incrementSeconds = (n = 1) => incrementMilliseconds(n * 1000)
      const incrementYear = (n = 1) => incrementMonth(n * 12)

      return render(props, {
        ...value,
        date,
        hours,
        milliseconds,
        minutes,
        month,
        seconds,
        year,

        setDate,
        setHours,
        setMilliseconds,
        setMinutes,
        setMonth,
        setSeconds,
        setYear,

        incrementDate,
        incrementHours,
        incrementMilliseconds,
        incrementMinutes,
        incrementMonth,
        incrementSeconds,
        incrementYear,

        decrementDate: (n = 1) => incrementDate(0 - n),
        decrementHours: (n = 1) => incrementHours(0 - n),
        decrementMilliseconds: (n = 1) => incrementMilliseconds(0 - n),
        decrementMinutes: (n = 1) => incrementMinutes(0 - n),
        decrementMonth: (n = 1) => incrementMonth(0 - n),
        decrementSeconds: (n = 1) => incrementSeconds(0 - n),
        decrementYear: (n = 1) => incrementYear(0 - n),

        // Provide the years as `*FullYear` as well, since the native JavaScript
        // APIs are named like that for backwards compatibility.
        setFullYear: setYear,
        incrementFullYear: incrementYear,
        decrementFullYear: (n = 1) => incrementYear(0 - n),
      })
    }}
  </AnyValue>
)

function getDaysInMonth(date) {
  const year = date.getFullYear()
  const monthIndex = date.getMonth()
  const lastDayOfMonth = new Date(0)
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0)
  lastDayOfMonth.setHours(0, 0, 0, 0)
  return lastDayOfMonth.getDate()
}

function setMonthHelper(date, month) {
  const year = date.getFullYear()
  const day = date.getDate()
  const desired = new Date(0)
  desired.setFullYear(year, month, 15)
  desired.setHours(0, 0, 0, 0)
  const max = getDaysInMonth(desired)
  date.setMonth(month, Math.min(day, max))
  return date
}

function addMonthsHelper(date, amount) {
  const year = date.getFullYear()
  const desiredMonth = date.getMonth() + amount
  const desired = new Date(0)
  desired.setFullYear(year, desiredMonth, 1)
  desired.setHours(0, 0, 0, 0)
  const max = getDaysInMonth(desired)
  date.setMonth(desiredMonth, Math.min(max, date.getDate()))
  return date
}

export default DateValue
