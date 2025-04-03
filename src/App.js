import React from 'react'
import Menu from './components/Menu/menu.component'
import { GlobalStyle, lightTheme, darkTheme } from './App.style'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <>
      <GlobalStyle />
      <Menu />
    </>
  )
}

export default App
