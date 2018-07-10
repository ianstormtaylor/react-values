import React from 'react'
import styled from 'react-emotion'
import { BooleanValue } from '..'
import { Button } from './support/components'

const TooltipExample = props => (
  <BooleanValue>
    {({ value: opened, toggle }) => (
      <React.Fragment>
        <Button icon="launch" onClick={toggle}>
          Open Modal
        </Button>
        {opened && (
          <Overlay onClick={toggle}>
            <Modal onClick={e => e.stopPropagation()}>
              <Button icon="cancel" onClick={toggle}>
                Close Modal
              </Button>
            </Modal>
          </Overlay>
        )}
      </React.Fragment>
    )}
  </BooleanValue>
)

const Overlay = styled('div')`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.1);
`

const Modal = styled('div')`
  background: white;
  padding: 20px;
  border-radius: 4px;
`

export default TooltipExample
