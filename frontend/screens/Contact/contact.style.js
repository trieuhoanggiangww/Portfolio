import styled from 'styled-components'

export const ContactSectionWrapper = styled.section`
  width: 100%;
  padding: 100px 0;
  background-color: transparent;
`

export const ContactSectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`

export const ContactContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`

export const ContactText = styled.p`
  flex: 1;
  font-family: 'JetBrains Mono', monospace;
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

export const ContactBox = styled.div`
  flex: 0 0 280px;
  border: 1px solid #5c6370;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: 'JetBrains Mono', monospace;
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`

export const ContactBoxTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`

export const ContactLink = styled.a`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  margin-left: 8px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }
`
