import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Menu from './components/Menu/menu.component'
import SocialBar from './components/SocialBar/socialbar.component'
import AboutMe from './components/Aboutme/aboutme.section'
import Project from './components/Project/project.section'
import AdminScreen from './screens/Admin/admin.screen'
import { GlobalStyle, lightTheme, darkTheme } from './App.style'
import settingApi from './services/setting.api'
import ProjectScreen from './screens/Project/project.screen'
import ProjectDetail from './components/Project/projectdetail.component'
import SkillSection from './screens/Skills/skills.section'
import ContactSection from './components/Contact/contact.section'
import Footer from './components/Footer/footer.component'
import BackgroundAnimation from './components/Animation/animation.component'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  // Đọc trạng thái theme từ localStorage khi mở app
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'light') {
      setIsDarkMode(false)
    } else {
      setIsDarkMode(true)
    }
  }, [])

  // Toggle theme và lưu vào localStorage
  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev
      localStorage.setItem('theme', newMode ? 'dark' : 'light')
      return newMode
    })
  }

  // Ghi lượt xem (chỉ ghi 1 lần mỗi 1 tiếng)
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

          {/* Trang admin */}
          <Route
            path="/admin/*"
            element={
              <AdminScreen isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            }
          />

          {/* Trang project */}
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
