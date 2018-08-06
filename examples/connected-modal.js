import React from 'react'
import styled from 'react-emotion'
import { createBooleanValue } from '..'
import { Button } from './support/components'

const ModalValue = createBooleanValue(false)

const ConnectedModalExample = props => (
  <Wrapper>
    <ModalButton />
    <Modal />
  </Wrapper>
)

const ModalButton = props => (
  <ModalValue>
    {({ value: opened, toggle }) => (
      <Button icon="launch" onClick={toggle}>
        Open Modal
      </Button>
    )}
  </ModalValue>
)

const Modal = props => (
  <ModalValue>
    {({ value: opened, toggle }) =>
      opened && (
        <ModalOverlay onClick={toggle}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <Button icon="cancel" onClick={toggle}>
              Close Modal
            </Button>
          </ModalContent>
        </ModalOverlay>
      )
    }
  </ModalValue>
)

const Wrapper = styled('div')``

const ModalOverlay = styled('div')`
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

const ModalContent = styled('div')`
  background: white;
  padding: 20px;
  border-radius: 4px;
`

export default ConnectedModalExample
