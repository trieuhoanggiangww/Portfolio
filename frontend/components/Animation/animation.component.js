import React from 'react'
import styled, { keyframes } from 'styled-components'

// Animation: Bay lên, quay nhẹ
const floatSquare = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.8;
  }
  100% {
    transform: translateY(-1000px) rotate(360deg);
    opacity: 0;
  }
`

const BackgroundWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  top: 0;
  left: 0;
  pointer-events: none;
`

const Particle = styled.div`
  position: absolute;
  top: 100%;
  width: ${({ size }) => size || 6}px;
  height: ${({ size }) => size || 6}px;
  background: ${({ theme }) => (theme.mode === 'light' ? '#111' : '#c778dd')};
  opacity: 0.6;
  animation: ${floatSquare} linear infinite;
  transform-origin: center;
`

const BackgroundAnimation = () => {
  const particles = Array.from({ length: 40 })

  return (
    <BackgroundWrapper>
      {particles.map((_, index) => {
        const size = Math.random() * 6 + 4
        return (
          <Particle
            key={index}
            size={size}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${18 + Math.random() * 5}s`,
            }}
          />
        )
      })}
    </BackgroundWrapper>
  )
}

export default BackgroundAnimation
