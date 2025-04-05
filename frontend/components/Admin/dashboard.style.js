import styled from 'styled-components'

export const DashboardWrapper = styled.div`
  flex: 1;
  padding: 30px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};
  min-height: 100vh;

  @media (max-width: 768px) {
    margin-top: 60px;
    padding: 20px 16px;
    width: 100%;
    box-sizing: border-box;
  }
`

export const DashboardTitle = styled.h1`
  font-family: 'JetBrains Mono', monospace;
  font-size: 28px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.accent};

  @media (max-width: 768px) {
    display: none;
  }
`

export const DashboardContent = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 16px;
  line-height: 1.6;
`
export const Section = styled.div`
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  ul {
    list-style: none;
    padding-left: 0;

    li {
      margin: 8px 0;
      font-size: 16px;
      word-break: break-word;

      strong {
        display: inline-block;
        min-width: 90px;
      }
    }
  }

  p {
    font-size: 16px;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    width: 100%;
  }
`

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  margin-top: 30px;

  h3 {
    font-size: 22px;
    color: ${({ theme }) => theme.text};
  }

  @media (max-width: 768px) {
    font-size: 15px;
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

export const StatSection = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;
  justify-content: center;
`

export const StatBox = styled.div`
  background-color: ${({ theme }) => theme.backgroundLight};
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.border};
  flex: 1;
  min-width: 200px;
  text-align: center;
  transition: 0.3s ease;

  h4 {
    font-size: 18px;
    margin-top: 10px;
    color: ${({ theme }) => theme.text};
  }

  p {
    font-size: 24px;
    font-weight: bold;
    margin-top: 6px;
    color: #c778dd;
  }
  @media (max-width: 768px) {
    flex: none;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
`

export const IconWrapper = styled.div`
  font-size: 36px;
  color: #c778dd;
  display: flex;
  justify-content: center;
`
export const AboutTextarea = styled.textarea`
  width: 100%;
  min-height: 400px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border: 1px solid #c778dd;
  border-radius: 8px;
  padding: 12px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  margin-top: 10px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #c778dd;
    background-color: ${({ theme }) => theme.background};
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`

export const SaveButton = styled.button`
  margin-top: 10px;
  padding: 8px 20px;
  background-color: #c778dd;
  color: white;
  border: none;
  border-radius: 6px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #a45fc1;
  }
  @media (max-width: 768px) {
    width: 100%;
    font-size: 16px;
    padding: 10px 0;
    text-align: center;
  }
`
