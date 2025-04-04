import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Menu from './components/Menu/menu.component'
import SocialBar from './components/SocialBar/socialbar.component'
import AboutMe from './screens/Aboutme/aboutme.section'
import Project from './screens/Project/project.section'
import AdminScreen from './screens/Admin/admin.screen' // Trang admin
import { GlobalStyle, lightTheme, darkTheme } from './App.style'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev)
  }

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Router>
        <Routes>
          {/* Trang chính portfolio */}
          <Route
            path="/"
            element={
              <>
                <SocialBar />
                <Menu
                  toggleTheme={() => setIsDarkMode((prev) => !prev)}
                  isDarkMode={isDarkMode}
                />
                <AboutMe />
                <Project />
              </>
            }
          />

          {/* Trang admin */}
          <Route
            path="/admin/*"
            element={
              <AdminScreen isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
