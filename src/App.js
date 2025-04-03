import React, { useState } from 'react'
import Menu from './components/Menu/menu.component'
import { GlobalStyle, lightTheme, darkTheme } from './App.style'
import { ThemeProvider } from 'styled-components'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Menu
        toggleTheme={() => setIsDarkMode((prev) => !prev)}
        isDarkMode={isDarkMode}
      />
    </ThemeProvider>
  )
}

export default App
