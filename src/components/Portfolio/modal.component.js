import React from 'react'
import styled from 'styled-components'

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`

const ModalContent = styled.div`
  background: #2a2a2a;
  color: white;
  padding: 24px;
  border-radius: 12px;
  max-width: 400px;
  text-align: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
`

const Button = styled.button`
  margin-top: 16px;
  background: #f0a500;
  border: none;
  padding: 8px 16px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 6px;
  &:hover {
    opacity: 0.9;
  }
`

function Modal({ message, onClose }) {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <p>{message}</p>
        <Button onClick={onClose}>Đóng</Button>
      </ModalContent>
    </ModalOverlay>
  )
}

export default Modal
