import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid #5c6370;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-family: 'JetBrains Mono', monospace;
  width: 100%;
  max-width: 360px;
  flex: 0 0 auto; /* cho scroll ngang */
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
  overflow: hidden;

  &:hover {
    transform: scale(1.01);
  }
`

export const Preview = styled.img`
  width: 100%;
  height: 180px;
  object-fit: contain;
  border-bottom: 1px solid #5c6370;
`

export const Stack = styled.div`
  padding: 8px 20px;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  opacity: 0.8;
  border-bottom: 1px solid #5c6370;
`

export const Title = styled.h3`
  font-size: 20px;
  margin-bottom: 8px;
  font-weight: 700;
`

export const Description = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  opacity: 0.85;
  margin-bottom: 20px;
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`

export const Button = styled.button`
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  padding: 6px 16px;
  border: 1px solid
    ${({ $highlight, theme }) => ($highlight ? '#c778dd' : theme.text)};
  color: ${({ $highlight, theme }) => ($highlight ? '#c778dd' : theme.text)};
  background: transparent;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
    background-color: ${({ $highlight }) =>
      $highlight ? '#c778dd20' : '#ffffff10'};
  }
`
export const StyledDate = styled.div`
  font-size: 14px;
  color: #777;
  margin: 8px 0;
`
