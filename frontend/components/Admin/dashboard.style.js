import styled from 'styled-components'

export const DashboardWrapper = styled.div`
  flex: 1;
  padding: 30px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};
  min-height: 100vh;
`

export const DashboardTitle = styled.h1`
  font-family: 'JetBrains Mono', monospace;
  font-size: 28px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.accent};
`

export const DashboardContent = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 16px;
  line-height: 1.6;
`
