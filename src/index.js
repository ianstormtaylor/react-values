import createComponent from './utils/create-component'
import createFactory from './utils/create-factory'

import Store from './types/any'
import ArrayStore from './types/array';
import BooleanStore from './types/boolean'
import DateStore from './types/date'
import MapStore from './types/map'
import NumberStore from './types/number'
import ObjectStore from './types/object'
import SetStore from './types/set'
import StringStore from './types/string'

const Value = createComponent(Store)
const createValue = createFactory(Store, Value)
export {Store, Value, createValue}

const ArrayValue = createComponent(ArrayStore)
const createArrayValue = createFactory(ArrayStore, ArrayValue)
export {ArrayStore, ArrayValue, createArrayValue}

const BooleanValue = createComponent(BooleanStore)
const createBooleanValue = createFactory(BooleanStore, BooleanValue)
export {BooleanStore, BooleanValue, createBooleanValue}

const DateValue = createComponent(DateStore)
const createDateValue = createFactory(DateStore, DateValue)
export {DateStore, DateValue, createDateValue}

const MapValue = createComponent(MapStore)
const createMapValue = createFactory(MapStore, MapValue)
export {MapStore,MapValue,createMapValue}


const NumberValue = createComponent(NumberStore)
const createNumberValue = createFactory(NumberStore, NumberValue)
export {NumberStore,NumberValue,createNumberValue}

NumberValue.defaultProps = {
  max: Number.MAX_SAFE_INTEGER,
  min: Number.MIN_SAFE_INTEGER,
}

const ObjectValue = createComponent(ObjectStore)
const createObjectValue = createFactory(ObjectStore, ObjectValue)
export {ObjectStore,ObjectValue,createObjectValue}

const SetValue = createComponent(SetStore)
const createSetValue = createFactory(SetStore, SetValue)
export {SetStore, SetValue, createSetValue}

const StringValue = createComponent(StringStore)
const createStringValue = createFactory(StringStore, StringValue)
export {StringStore, StringValue, createStringValue}
