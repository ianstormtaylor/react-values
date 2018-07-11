import AnyValue from './any-value'

class DateValue extends AnyValue {
  constructor(...args) {
    super(...args, new Date())
  }

  get date() {
    return this.value.getDate()
  }

  get hours() {
    return this.value.getHours()
  }

  get milliseconds() {
    return this.value.getMilliseconds()
  }

  get minutes() {
    return this.value.getMinutes()
  }

  get month() {
    return this.value.getMonth()
  }

  get seconds() {
    return this.value.getSeconds()
  }

  get year() {
    return this.value.getFullYear()
  }

  setDate = this.proxy('setDate', true)
  setHours = this.proxy('setHours', true)
  setMilliseconds = this.proxy('setMilliseconds', true)
  setMinutes = this.proxy('setMinutes', true)
  setMonth = m => this.transform(v => setMonthHelper(v, m))
  setSeconds = this.proxy('setSeconds', true)
  setYear = this.proxy('setFullYear', true)
  setFullYear = (...args) => this.setYear(...args)

  incrementDate = (n = 1) =>
    this.transform(v => {
      v.setDate(this.date + n)
      return v
    })
  incrementHours = (n = 1) => this.incrementMinutes(n * 60)
  incrementMilliseconds = (n = 1) =>
    this.transform(v => new Date(v.getTime() + n))
  incrementMinutes = (n = 1) => this.incrementSeconds(n * 60)
  incrementMonth = (n = 1) => this.transform(v => incrementMonthHelper(v, n))
  incrementSeconds = (n = 1) => this.incrementMilliseconds(n * 1000)
  incrementYear = (n = 1) => this.incrementMonth(n * 12)
  incrementFullYear = (...args) => this.incrementYear(...args)

  decrementDate = (n = 1) => this.incrementDate(0 - n)
  decrementHours = (n = 1) => this.incrementHours(0 - n)
  decrementMilliseconds = (n = 1) => this.incrementMilliseconds(0 - n)
  decrementMinutes = (n = 1) => this.incrementMinutes(0 - n)
  decrementMonth = (n = 1) => this.incrementMonth(0 - n)
  decrementSeconds = (n = 1) => this.incrementSeconds(0 - n)
  decrementYear = (n = 1) => this.incrementYear(0 - n)
  decrementFullYear = (...args) => this.decrementYear(...args)

  states = [
    'value',
    'date',
    'hours',
    'milliseconds',
    'minutes',
    'month',
    'seconds',
    'year',
  ]

  transforms = [
    'set',
    'reset',
    'clear',
    'decrementDate',
    'decrementHours',
    'decrementMilliseconds',
    'decrementMinutes',
    'decrementMonth',
    'decrementSeconds',
    'decrementYear',
    'incrementDate',
    'incrementHours',
    'incrementMilliseconds',
    'incrementMinutes',
    'incrementMonth',
    'incrementSeconds',
    'incrementYear',
    'setDate',
    'setHours',
    'setMilliseconds',
    'setMinutes',
    'setMonth',
    'setSeconds',
    'setYear',
  ]
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

function incrementMonthHelper(date, amount) {
  const year = date.getFullYear()
  const desiredMonth = date.getMonth() + amount
  const desired = new Date(0)
  desired.setFullYear(year, desiredMonth, 1)
  desired.setHours(0, 0, 0, 0)
  const max = getDaysInMonth(desired)
  date.setMonth(desiredMonth, Math.min(max, date.getDate()))
  return date
}

function getDaysInMonth(date) {
  const year = date.getFullYear()
  const monthIndex = date.getMonth()
  const lastDayOfMonth = new Date(0)
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0)
  lastDayOfMonth.setHours(0, 0, 0, 0)
  return lastDayOfMonth.getDate()
}

export default DateValue
