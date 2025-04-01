import React, { useState, useEffect } from 'react'
import { GlobalStyle, PageWrapper } from './App.styled'
import About from './components/About/about.component'
import Menu from './components/Menu/menu.component'
import Portfolio from './components/Portfolio/portfolio.component'

function App() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <Menu isSticky={isSticky} />
        <About />
        <Portfolio />
        <footer style={{ opacity: 0.6 }}>© 2025 - Thiết kế bởi tôi</footer>
      </PageWrapper>
    </>
  )
}

export default App
