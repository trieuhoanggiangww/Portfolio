import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  width: 100%;
  padding: 30px 0 10px;
  border-top: 1px solid #5c6370;
`

export const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`

export const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media (max-width: 768px) {
    align-items: center;
  }
`

export const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;

  @media (max-width: 768px) {
    align-items: center;
  }
`

export const FooterName = styled.h3`
  font-family: 'JetBrains Mono', monospace;
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  margin: 0;
`

export const FooterEmail = styled.p`
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  margin: 0;
`

export const FooterDescription = styled.p`
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  margin: 0;
`

export const FooterMediaTitle = styled.h4`
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  font-weight: normal;
  color: ${({ theme }) => theme.text};
  margin: 0;
  line-height: 1;
`

export const FooterMediaIcons = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  margin-top: 10px;
`

export const FooterIconLink = styled.a`
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #c778dd;
  }
`

export const FooterCopyright = styled.p`
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  text-align: center;
  margin-top: 20px;
`
