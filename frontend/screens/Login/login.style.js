import styled from 'styled-components'

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${({ theme }) => theme.background};
`

export const LoginForm = styled.form`
  background: ${({ theme }) => theme.background};
  padding: 40px;
  border: 1px solid #5c6370;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  width: 320px;
  gap: 20px;
`

export const Title = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.text};
  font-family: 'JetBrains Mono', monospace;
  margin-bottom: 10px;
`

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #5c6370;
  background: transparent;
  color: ${({ theme }) => theme.text};
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.accent};
  }
`

export const Button = styled.button`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.accent};
  background: transparent;
  color: ${({ theme }) => theme.accent};
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: ${({ theme }) => theme.accentTransparent};
  }
`

export const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  text-align: center;
`
