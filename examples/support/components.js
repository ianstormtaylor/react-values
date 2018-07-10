import React from 'react'
import styled from 'react-emotion'

export const Icon = styled(({ className, ...rest }) => {
  return <span className={`material-icons ${className}`} {...rest} />
})`
  font-size: 18px;
  vertical-align: text-bottom;
`

export const Button = styled(({ icon, children, ...props }) => (
  <button {...props}>
    {icon ? (
      <React.Fragment>
        <Icon>{icon}</Icon> {children}
      </React.Fragment>
    ) : (
      children
    )}
  </button>
))`
  appearance: none;
  border: none;
  background: transparent;
  transition: all 0.2s;
  cursor: pointer;
  color: gray;
  font-size: 16px;

  &:hover {
    color: dodgerblue;
  }

  &:focus {
    outline: none;
  }
`
