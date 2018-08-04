import createComponent from '../utils/create-component'
import createFactory from '../utils/create-factory'
import { Store } from './any'

const SECONDS = 1000
const MINUTES = 1000 * 60
const HOURS = 1000 * 60 * 60

class DateStore extends Store {
  constructor(value, props) {
    super(value, props, new Date())

    this.compute('date', v => v.getDate())
    this.compute('hours', v => v.getHours())
    this.compute('milliseconds', v => v.getMilliseconds())
    this.compute('minutes', v => v.getMinutes())
    this.compute('month', v => v.getMonth())
    this.compute('seconds', v => v.getSeconds())
    this.compute('year', v => v.getFullYear())

    this.define('setMonth', setMonth)
    this.proxy('setDate', { mutates: true })
    this.proxy('setFullYear', { alias: 'setYear', mutates: true })
    this.proxy('setFullYear', { mutates: true })
    this.proxy('setHours', { mutates: true })
    this.proxy('setMilliseconds', { mutates: true })
    this.proxy('setMinutes', { mutates: true })
    this.proxy('setSeconds', { mutates: true })

    this.define('incrementDate', (v, n = 1) => incDate(v, n))
    this.define('incrementHours', (v, n = 1) => incMil(v, n * HOURS))
    this.define('incrementMilliseconds', (v, n = 1) => incMil(v, n))
    this.define('incrementMinutes', (v, n = 1) => incMil(v, n * MINUTES))
    this.define('incrementMonth', (v, n = 1) => incMonth(v, n))
    this.define('incrementSeconds', (v, n = 1) => incMil(v, n * SECONDS))
    this.define('incrementYear', (v, n = 1) => incMonth(v, n * 12))

    this.define('decrementDate', (v, n = 1) => incDate(v, 0 - n))
    this.define('decrementHours', (v, n = 1) => incMil(v, 0 - n * HOURS))
    this.define('decrementMilliseconds', (v, n = 1) => incMil(v, 0 - n))
    this.define('decrementMinutes', (v, n = 1) => incMil(v, 0 - n * MINUTES))
    this.define('decrementMonth', (v, n = 1) => incMonth(v, 0 - n))
    this.define('decrementSeconds', (v, n = 1) => incMil(v, 0 - n * SECONDS))
    this.define('decrementYear', (v, n = 1) => incMonth(v, 0 - n * 12))
  }

  clone(value) {
    return new Date(value.getTime())
  }
}

function incMil(v, n) {
  return new Date(v.getTime() + n)
}

function incDate(v, n) {
  const d = new Date(v.getTime())
  d.setDate(d.getDate() + n)
  return d
}

function incMonth(v, n) {
  const year = v.getFullYear()
  const desiredMonth = v.getMonth() + n
  const desired = new Date(0)
  desired.setFullYear(year, desiredMonth, 1)
  desired.setHours(0, 0, 0, 0)
  const max = days(desired)
  v.setMonth(desiredMonth, Math.min(max, v.getDate()))
  return v
}

function setMonth(v, m) {
  const d = new Date(v.getTime())
  const year = d.getFullYear()
  const day = d.getDate()
  const desired = new Date(0)
  desired.setFullYear(year, m, 15)
  desired.setHours(0, 0, 0, 0)
  const max = days(desired)
  d.setMonth(m, Math.min(day, max))
  return d
}

function days(v) {
  const year = v.getFullYear()
  const monthIndex = v.getMonth()
  const lastDayOfMonth = new Date(0)
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0)
  lastDayOfMonth.setHours(0, 0, 0, 0)
  return lastDayOfMonth.getDate()
}

const DateValue = createComponent(DateStore)
const createDateValue = createFactory(DateStore, DateValue)

export { DateValue, createDateValue, DateStore }
