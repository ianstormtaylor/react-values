export default [
  {
    name: 'Basic Toggle',
    path: '/basic-toggle',
    Component: require('../basic-toggle').default,
    source: require('!raw-loader!../basic-toggle'),
  },
  {
    name: 'Reusable Toggle',
    path: '/reusable-toggle',
    Component: require('../reusable-toggle').default,
    source: require('!raw-loader!../reusable-toggle'),
  },
  {
    name: 'Counter',
    path: '/counter',
    Component: require('../counter').default,
    source: require('!raw-loader!../counter'),
  },
  {
    name: 'Time Picker',
    path: '/time-picker',
    Component: require('../time-picker').default,
    source: require('!raw-loader!../time-picker'),
  },
  {
    name: 'Filtering',
    path: '/filtering',
    Component: require('../filtering').default,
    source: require('!raw-loader!../filtering'),
  },
  {
    name: 'Simple Tooltip',
    path: '/tooltip',
    Component: require('../tooltip').default,
    source: require('!raw-loader!../tooltip'),
  },
  {
    name: 'Simple Modal',
    path: '/modal',
    Component: require('../modal').default,
    source: require('!raw-loader!../modal'),
  },
]
