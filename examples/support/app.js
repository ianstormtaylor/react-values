import 'prismjs'
import 'prismjs/components/prism-jsx.min'

import React from 'react'
import styled, { css } from 'react-emotion'
import Prism from 'react-prism'
import {
  HashRouter,
  Link as RouterLink,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'

import examples from './examples'
import logo from '../../docs/images/logo.svg'
import { PURPLE } from './constants'

const Columns = styled('div')`
  display: flex;
  height: 100vh;
  color: #444;
  width: 100vw;
  overflow: hidden;
`

const ColumnNav = styled('div')`
  position: relative;
  background: white;
  flex: 0;
  min-width: 200px;
`

const ColumnContent = styled('div')`
  flex: auto;
  display: flex;
  justify-content: space-between;
  background: #202746;
`

const ColumnWarning = styled('div')`
  flex: auto;
  padding: 40px;
  background: #fffae0;

  & > pre {
    margin: 0;
    white-space: pre;
    overflow-x: scroll;
  }
`

const NavHeading = styled('div')`
  text-transform: uppercase;
  color: #aaa;
  font-size: 0.75em;
`

const NavLogo = styled('img')`
  max-width: 100%;
`

const NavSection = styled('div')`
  position: relative;
  margin: 20px;

  & > * + * {
    margin-top: 8px;
  }
`

const NavLink = styled(({ active, ...props }) => <RouterLink {...props} />)`
  position: relative;
  display: block;
  text-decoration: none;
  color: ${props => (props.active ? PURPLE : '#666')};
  font-weight: ${props => (props.active ? 'bold' : 'normal')};

  &:hover {
    color: ${PURPLE};
  }

  margin-right: -20px;

  &::after {
    content: ${props => (props.active ? '""' : 'none')};
    position: absolute;
    top: 50%;
    margin-top: -7px;
    right: 0;
    border: 7px solid transparent;
    border-left: none;
    border-right-color: #202746;
  }
`

const ExternalLink = NavLink.withComponent('a')

const ExampleWrapper = styled('div')`
  flex: 1 1;
  padding: 40px;
  display: flex;
`

const Example = styled('div')`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: #fff;
  border-radius: 4px;
  padding: 10px;
`

const SourceWrapper = styled('div')`
  flex: auto 1;
  font-size: 0.8em;
  max-width: 550px;
  padding: 40px 0;
  overflow-y: auto;
`

const Source = styled('div')`
  > pre {
    font-size: 0.85em !important;
    overflow-x: scroll;
    padding: 0 !important;
    margin: 0 !important;
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
        <Columns>
          <ColumnNav>
            <NavSection>
              <NavLogo src={logo} />
            </NavSection>
            <NavSection>
              <NavHeading>Docs</NavHeading>
              <ExternalLink href="https://github.com/ianstormtaylor/react-values">
                GitHub
              </ExternalLink>
              <ExternalLink href="https://github.com/ianstormtaylor/react-values/blob/master/docs/guide.md">
                Getting Started
              </ExternalLink>
              <ExternalLink href="https://github.com/ianstormtaylor/react-values/blob/master/docs/reference.md">
                API Reference
              </ExternalLink>
            </NavSection>
            <NavSection>
              <NavHeading>Examples</NavHeading>
              {examples.map(({ name, Component, path }) => (
                <Route key={path} exact path={path}>
                  {({ match }) => (
                    <NavLink to={path} active={match && match.isExact}>
                      {name}
                    </NavLink>
                  )}
                </Route>
              ))}
            </NavSection>
          </ColumnNav>
          {this.state.error ? (
            <ColumnWarning>
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
            </ColumnWarning>
          ) : (
            <ColumnContent>
              <Switch>
                {examples.map(({ name, Component, path, source }) => (
                  <Route key={path} path={path}>
                    {({ match }) =>
                      match && (
                        <React.Fragment>
                          <ExampleWrapper>
                            <Example>
                              <Component />
                            </Example>
                          </ExampleWrapper>
                          <SourceWrapper>
                            <Source>
                              <Prism className="language-jsx">
                                {source.replace(
                                  "from '..'",
                                  "from 'react-values'"
                                )}
                              </Prism>
                            </Source>
                          </SourceWrapper>
                        </React.Fragment>
                      )
                    }
                  </Route>
                ))}
                <Redirect from="/" to={examples[0].path} />
              </Switch>
            </ColumnContent>
          )}
        </Columns>
      </HashRouter>
    )
  }
}
