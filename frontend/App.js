import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import Menu from './components/Menu/menu.component'
import SocialBar from './components/SocialBar/socialbar.component'
import AboutMe from './components/Aboutme/aboutme.section'
import Project from './components/Project/project.section'
import AdminScreen from './screens/Admin/admin.screen'
import { GlobalStyle, lightTheme, darkTheme } from './App.style'
import settingApi from './services/setting.api'
import ProjectScreen from './screens/Project/project.screen'
import ProjectDetail from './components/Project/projectdetail.component'
import SkillSection from './components/Skills/skills.section'
import ContactSection from './components/Contact/contact.section'
import Footer from './components/Footer/footer.component'
import BackgroundAnimation from './components/Animation/animation.component'
import LoginScreen from './screens/Login/login.screen'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    setIsDarkMode(savedTheme === 'light' ? false : true)

    const token = localStorage.getItem('adminToken')
    setIsAuthenticated(!!token)
  }, [])

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev
      localStorage.setItem('theme', newMode ? 'dark' : 'light')
      return newMode
    })
  }

  useEffect(() => {
    const lastView = localStorage.getItem('lastViewed')
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
      <BackgroundAnimation />
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
                <SkillSection />
                <ContactSection />
                <Footer />
              </>
            }
          />

          {/* Trang login admin */}
          <Route
            path="/admin/login"
            element={<LoginScreen setIsAuthenticated={setIsAuthenticated} />}
          />

          {/* Auto redirect từ /admin về /admin/dashboard */}
          <Route
            path="/admin"
            element={<Navigate to="/admin/dashboard" replace />}
          />

          {/* Trang dashboard admin - bảo vệ route */}
          <Route
            path="/admin/*"
            element={
              isAuthenticated ? (
                <AdminScreen
                  isDarkMode={isDarkMode}
                  toggleTheme={toggleTheme}
                />
              ) : (
                <Navigate to="/admin/login" replace />
              )
            }
          />

          {/* Trang projects */}
          <Route
            path="/projects"
            element={
              <ProjectScreen
                toggleTheme={toggleTheme}
                isDarkMode={isDarkMode}
              />
            }
          />
          <Route
            path="/projects/:id"
            element={
              <ProjectDetail
                toggleTheme={toggleTheme}
                isDarkMode={isDarkMode}
              />
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
