import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

require('./components/any-value')
require('./components/array-value')
require('./components/boolean-value')
require('./components/date-value')
require('./components/map-value')
require('./components/number-value')
require('./components/object-value')
require('./components/set-value')
require('./components/string-value')
