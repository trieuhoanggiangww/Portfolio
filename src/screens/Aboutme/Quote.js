import React from 'react'
import styled from 'styled-components'

const QuoteBox = styled.div`
  max-width: 800px;
  margin: 80px auto;
  padding: 20px 32px;
  border: 2px solid #5c6370;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-family: 'JetBrains Mono', monospace;
  font-size: 18px;
  font-weight: 500;
  white-space: pre-wrap;
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 768px) {
    padding: 20px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    padding: 16px;
    font-size: 15px;
  }
`

const Vietnamese = styled.span`
  font-size: 17px;
  color: ${({ theme }) => theme.text};
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const Author = styled.span`
  align-self: flex-end;
  color: ${({ theme }) => theme.menuText};
  font-size: 16px;
  white-space: nowrap;

  &::before {
    content: '— ';
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

const Quote = () => (
  <QuoteBox>
    <span>&ldquo;Simplicity is the ultimate sophistication.&rdquo;</span>
    <Vietnamese>“Sự đơn giản là đỉnh cao của sự tinh tế.”</Vietnamese>
    <Author>Leonardo da Vinci</Author>
  </QuoteBox>
)

export default Quote
