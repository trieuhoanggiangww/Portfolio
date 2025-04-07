import React, { useState, useEffect } from 'react'
import {
  SidebarWrapper,
  AdminProfile,
  AdminIcon,
  AdminName,
  SidebarMenu,
  SidebarItemLink,
  ThemeToggleContainer,
  ThemeLabel,
  ThemeToggleWrapper,
  ToggleCircle,
  HamburgerButton,
  SidebarOverlay,
  SideTitle,
} from './sidebar.style'
import {
  FaUserCircle,
  FaHome,
  FaFolderOpen,
  FaSignOutAlt,
  FaMoon,
  FaSun,
  FaBars,
} from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom'

const Sidebar = ({ toggleTheme, isDarkMode }) => {
  const [dark, setDark] = useState(isDarkMode)
  const [isOpen, setIsOpen] = useState(false)
  const [username, setUsername] = useState('Admin')
  const location = useLocation()
  const navigate = useNavigate()

  const getPageTitle = () => {
    if (location.pathname.includes('dashboard')) return 'Dashboard'
    if (location.pathname.includes('projects')) return 'Project Manager'
    if (location.pathname.includes('logout')) return 'Logout'
    return ''
  }

  const handleThemeChange = () => {
    toggleTheme()
    setDark(!dark)
  }

  useEffect(() => {
    const storedUsername = localStorage.getItem('adminUsername')
    if (storedUsername) {
      setUsername(storedUsername)
    }
  }, [])

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    navigate('/admin/login')
  }

  return (
    <>
      {/* Hamburger cho Mobile */}
      <HamburgerButton onClick={handleToggleSidebar} $isOpen={isOpen}>
        <FaBars />
        <SideTitle>{getPageTitle()}</SideTitle>
      </HamburgerButton>

      {/* SidebarOverlay khi Sidebar mở */}
      {isOpen && <SidebarOverlay onClick={handleToggleSidebar} />}

      {/* Sidebar */}
      <SidebarWrapper $isOpen={isOpen}>
        {/* Admin Info */}
        <AdminProfile>
          <AdminIcon>
            <FaUserCircle />
          </AdminIcon>
          <AdminName>{username}</AdminName>
        </AdminProfile>

        {/* Menu Items */}
        <SidebarMenu>
          <SidebarItemLink to="/admin/dashboard" onClick={handleToggleSidebar}>
            <FaHome style={{ marginRight: '10px' }} />
            Dashboard
          </SidebarItemLink>

          <SidebarItemLink to="/admin/projects" onClick={handleToggleSidebar}>
            <FaFolderOpen style={{ marginRight: '10px' }} />
            Project Manager
          </SidebarItemLink>
        </SidebarMenu>

        {/* Dưới cùng */}
        <div style={{ marginTop: 'auto' }}>
          <SidebarItemLink
            as="div"
            onClick={handleLogout}
            style={{ cursor: 'pointer' }}
          >
            <FaSignOutAlt style={{ marginRight: '10px' }} />
            Logout
          </SidebarItemLink>

          <ThemeToggleContainer onClick={handleThemeChange}>
            <ThemeLabel>
              {dark ? <FaSun /> : <FaMoon />}
              {dark ? 'Light mode' : 'Dark mode'}
            </ThemeLabel>
            <ThemeToggleWrapper>
              <ToggleCircle $isDark={dark}>
                {dark ? <FaSun /> : <FaMoon />}
              </ToggleCircle>
            </ThemeToggleWrapper>
          </ThemeToggleContainer>
        </div>
      </SidebarWrapper>
    </>
  )
}

export default Sidebar
