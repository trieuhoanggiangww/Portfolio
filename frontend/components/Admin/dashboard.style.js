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
export const Section = styled.div`
  background-color: ${({ theme }) => theme.menuBackground || '#2e2e4d'};
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  ul {
    list-style: none;
    padding-left: 0;

    li {
      margin: 8px 0;
      font-size: 16px;
    }
  }

  p {
    font-size: 16px;
    line-height: 1.6;
  }
`

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;

  h3 {
    font-size: 22px;
    color: ${({ theme }) => theme.text};
  }
`

export const EditButton = styled.button`
  background-color: ${({ theme }) => theme.accent};
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.background};
  }
`
