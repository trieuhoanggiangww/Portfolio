import React from 'react'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const scaleUp = keyframes`
  from { transform: scale(0.95); opacity: 0.8; }
  to { transform: scale(1); opacity: 1; }
`

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`

const ModalBox = styled.div`
  background: #1e1e1e;
  color: #fff;
  border-radius: 16px;
  padding: 32px;
  width: 700px;
  max-width: 95vw;
  max-height: 90vh;
  overflow-y: auto;
  animation: ${scaleUp} 0.3s ease;
  position: relative;
`

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 16px;
  background: none;
  border: none;
  color: #aaa;
  font-size: 22px;
  cursor: pointer;

  &:hover {
    color: #f0a500;
  }
`

const Title = styled.h2`
  font-size: 22px;
  margin-bottom: 16px;
  color: #f0a500;
`

const Content = styled.div`
  font-size: 15px;
  line-height: 1.6;
`

function DetailModal({ title, children, onClose }) {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Title>{title}</Title>
        <Content>{children}</Content>
      </ModalBox>
    </ModalOverlay>
  )
}

export default DetailModal
