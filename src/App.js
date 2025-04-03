import React, { useState } from 'react'
import Menu from './components/Menu/menu.component'
import { GlobalStyle, lightTheme, darkTheme } from './App.style'
import { ThemeProvider } from 'styled-components'
import SocialBar from './components/SocialBar/socialbar.component'
import AboutMe from './screens/Aboutme/aboutme.section'
import Project from './screens/Project/project.section'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <SocialBar />
      <Menu
        toggleTheme={() => setIsDarkMode((prev) => !prev)}
        isDarkMode={isDarkMode}
      />
      <AboutMe />
      <Project />
    </ThemeProvider>
  )
}

export default App
