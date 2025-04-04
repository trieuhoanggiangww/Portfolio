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
  background: '#ffffff',
  text: '#000000',
  menuText: '#666666',
  accent: '#C778DD',
}

export const darkTheme = {
  background: '#282C33',
  text: '#ffffff',
  menuText: '#888888',
  accent: '#C778DD',
}
