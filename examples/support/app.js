import React from 'react'
import Highlighter from 'react-syntax-highlighter/prism'
import styled from 'react-emotion'
import { tomorrow } from 'react-syntax-highlighter/styles/prism'
import {
  HashRouter,
  Link as RouterLink,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'

const EXAMPLES = [
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
]

const Container = styled('div')`
  display: flex;
  color: #444;
  min-height: 100vh;
`

const NavTitle = styled('div')`
  padding: 20px;
  font-family: monospace;
  border-bottom: 1px solid #eee;
`

const Nav = styled('div')`
  flex: 0;
  min-width: 180px;
  background: #f9f9f9;
  border-right: 1px solid #eee;
`

const NavHeader = styled('div')`
  text-transform: uppercase;
  color: #aaa;
  font-size: 0.75em;
`

const NavSection = styled('div')`
  padding: 20px;

  & + & {
    margin-top: 10px;
  }
`

const NavLink = styled(({ active, ...props }) => <RouterLink {...props} />)`
  display: inline-block;
  margin: 0.3em 0;
  text-decoration: none;
  color: ${props => (props.active ? 'dodgerblue' : 'inherit')};
`

const Content = styled('div')`
  flex: 1;
  display: flex;
`

const Example = styled('div')`
  flex: 1;
  background: #fff;
  padding: 60px 40px;
`

const Source = styled('div')`
  flex: 1;
  padding: 5px 10px 10px;
  background: #2d2d2d;
  font-size: 0.8em;
`

const Warning = styled('div')`
  flex: 1;
  padding: 20px;
  background: #fffae0;

  & > pre {
    background: #fbf1bd;
    white-space: pre;
    overflow-x: scroll;
    margin-bottom: 0;
  }
`

export default class App extends React.Component {
  state = {
    error: null,
    info: null,
  }

  componentDidCatch(error, info) {
    this.setState({ error, info })
  }

  render() {
    return (
      <HashRouter>
        <Container>
          <Nav>
            <NavTitle>react-values</NavTitle>
            <NavSection>
              <NavHeader>Examples</NavHeader>
              {EXAMPLES.map(({ name, Component, path }) => (
                <Route key={path} exact path={path}>
                  {({ match }) => (
                    <NavLink to={path} active={match && match.isExact}>
                      {name}
                    </NavLink>
                  )}
                </Route>
              ))}
            </NavSection>
          </Nav>
          <Content>
            {this.state.error ? (
              <Warning>
                <p>
                  An error was thrown by one of the example's React components!
                </p>
                <pre>
                  <code>
                    {this.state.error.stack}
                    {'\n'}
                    {this.state.info.componentStack}
                  </code>
                </pre>
              </Warning>
            ) : (
              <Switch>
                {EXAMPLES.map(({ name, Component, path, source }) => (
                  <Route key={path} path={path}>
                    {({ match }) =>
                      match && (
                        <React.Fragment>
                          <Example>
                            <Component />
                          </Example>
                          <Source>
                            <Highlighter language="javascript" style={tomorrow}>
                              {source}
                            </Highlighter>
                          </Source>
                        </React.Fragment>
                      )
                    }
                  </Route>
                ))}
                <Redirect from="/" to={EXAMPLES[0].path} />
              </Switch>
            )}
          </Content>
        </Container>
      </HashRouter>
    )
  }
}
