import React from 'react'
import styled, { keyframes } from 'styled-components'
import { FaExclamationCircle } from 'react-icons/fa'

// Hiệu ứng Overlay mờ dần
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

// Hiệu ứng scale + fade cho modal box
const scaleUp = keyframes`
  0% {
    transform: scale(0.9);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0; /* top:0; left:0; right:0; bottom:0; */
  background: rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 0.3s forwards;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`

const ModalBox = styled.div`
  background: linear-gradient(145deg, #2a2a2a, #1e1e1e);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  border-radius: 16px;
  padding: 24px 32px;
  color: #fff;
  width: 350px;
  max-width: 90%;
  animation: ${scaleUp} 0.3s ease forwards;
  position: relative;
  text-align: center;
`

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 16px;
  background: none;
  border: none;
  color: #999;
  font-size: 20px;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #f0a500;
  }
`

const Title = styled.h3`
  margin: 0 0 16px;
  font-size: 20px;
  color: #f0a500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`

const Message = styled.p`
  margin: 0;
  font-size: 15px;
  line-height: 1.6;
`

const ButtonArea = styled.div`
  margin-top: 20px;
`

const ActionButton = styled.button`
  background: #f0a500;
  color: #1e1e1e;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s;

  &:hover {
    background: #f2bb13;
  }
`

function Modal({ message, onClose }) {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <Title>
          <FaExclamationCircle />
          Thông báo
        </Title>
        <Message>{message}</Message>
        <ButtonArea>
          <ActionButton onClick={onClose}>Đóng</ActionButton>
        </ButtonArea>
      </ModalBox>
    </ModalOverlay>
  )
}

export default Modal
