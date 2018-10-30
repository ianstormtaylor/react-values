import createComponent from './utils/preact/create-component'
import createFactory from './utils/preact/create-factory'

export Store from './types/any'
export ArrayStore from './types/array';
export BooleanStore from './types/boolean'
export DateStore from './types/date'
export MapStore from './types/map'
export NumberStore from './types/number'
export ObjectStore from './types/object'
export SetStore from './types/set'
export StringStore from './types/string'

export const Value = createComponent(Store)
export const createValue = createFactory(Store, Value)

export const ArrayValue = createComponent(ArrayStore)
export const createArrayValue = createFactory(ArrayStore, ArrayValue)

export const BooleanValue = createComponent(BooleanStore)
export const createBooleanValue = createFactory(BooleanStore, BooleanValue)

export const DateValue = createComponent(DateStore)
export const createDateValue = createFactory(DateStore, DateValue)

export const MapValue = createComponent(MapStore)
export const createMapValue = createFactory(MapStore, MapValue)


export const NumberValue = createComponent(NumberStore)
export const createNumberValue = createFactory(NumberStore, NumberValue)

NumberValue.defaultProps = {
  max: Number.MAX_SAFE_INTEGER,
  min: Number.MIN_SAFE_INTEGER,
}

export const ObjectValue = createComponent(ObjectStore)
export const createObjectValue = createFactory(ObjectStore, ObjectValue)

export const SetValue = createComponent(SetStore)
export const createSetValue = createFactory(SetStore, SetValue)

export const StringValue = createComponent(StringStore)
export const createStringValue = createFactory(StringStore, StringValue)