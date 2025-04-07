import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'JetBrains Mono', monospace;   
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`

export const lightTheme = {
  background: '#E5E2E2',
  text: '#000000',
  menuText: '#666666',
  accent: '#C778DD',
  accentTransparent: '#00000055',
  accentBorder: '#00000099',
}

export const darkTheme = {
  background: '#282C33',
  text: '#ffffff',
  menuText: '#888888',
  accent: '#C778DD',
  accentTransparent: '#c778dd55',
  accentBorder: '#c778dd99',
}
