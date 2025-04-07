import styled from 'styled-components'

export const DetailWrapper = styled.section`
  width: 100%;
  padding: 100px 0;
  margin-top: 80px;
  background-color: transparent;
`

export const DetailContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 768px) {
    padding: 0 16px;
    gap: 20px;
  }
`

export const DetailTitle = styled.h1`
  font-family: 'JetBrains Mono', monospace;
  font-size: 32px;
  color: ${({ theme }) => theme.text};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`

export const DetailImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: contain;
  border: 1px solid #5c6370;

  @media (max-width: 768px) {
    max-height: 250px;
  }
`

export const DetailButtons = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

export const DetailButton = styled.button`
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  padding: 8px 16px;
  border: 1px solid
    ${({ $highlight, theme }) => ($highlight ? '#c778dd' : theme.text)};
  color: ${({ $highlight, theme }) => ($highlight ? '#c778dd' : theme.text)};
  background: transparent;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s;
  white-space: nowrap;

  &:hover {
    transform: scale(1.05);
    background-color: ${({ $highlight }) =>
      $highlight ? '#c778dd20' : '#ffffff10'};
  }
`

export const DetailContent = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 16px;
  color: ${({ theme }) => theme.text};
  line-height: 1.7;

  p {
    margin-bottom: 1em;
  }

  ul {
    padding-left: 20px;
    margin-bottom: 1em;
  }

  li {
    margin-bottom: 5px;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 20px auto;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.6;
  }
`
