import { useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'

export const useScrollToSection = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const scrollTarget = useRef(null)

  const scrollToId = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleNavigateAndScroll = (id) => {
    if (location.pathname === '/') {
      // Đang ở trang chủ thì scroll thẳng
      scrollToId(id)
    } else {
      // Nếu không phải trang chủ, navigate về '/' rồi mới scroll
      scrollTarget.current = id
      navigate('/')
    }
  }

  // Khi đã navigate về '/', kiểm tra và scroll
  useEffect(() => {
    if (location.pathname === '/' && scrollTarget.current) {
      setTimeout(() => {
        scrollToId(scrollTarget.current)
        scrollTarget.current = null
      }, 100) // delay nhẹ để DOM kịp render
    }
  }, [location])

  return handleNavigateAndScroll
}
