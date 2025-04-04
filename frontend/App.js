import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Menu from './components/Menu/menu.component'
import SocialBar from './components/SocialBar/socialbar.component'
import AboutMe from './screens/Aboutme/aboutme.section'
import Project from './screens/Project/project.section'
import AdminScreen from './screens/Admin/admin.screen'
import { GlobalStyle, lightTheme, darkTheme } from './App.style'
import settingApi from './services/setting.api'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev)
  }

  useEffect(() => {
    const lastView = localStorage.getItem('lastViewed')

    // Nếu chưa từng lưu hoặc lưu cách đây > 1 tiếng (3600 giây)
    if (!lastView || Date.now() - parseInt(lastView) > 3600 * 1000) {
      settingApi
        .increaseViews()
        .then(() => {
          localStorage.setItem('lastViewed', Date.now())
        })
        .catch((err) => console.error('Lỗi ghi lượt xem:', err))
    }
  }, [])

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
                <Menu toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
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
