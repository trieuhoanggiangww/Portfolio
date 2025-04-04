import React, { useState } from 'react'
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
} from './sidebar.style'
import {
  FaUserCircle,
  FaHome,
  FaFolderOpen,
  FaSignOutAlt,
  FaMoon,
  FaSun,
} from 'react-icons/fa'

const Sidebar = ({ toggleTheme, isDarkMode }) => {
  const [dark, setDark] = useState(isDarkMode)

  const handleThemeChange = () => {
    toggleTheme()
    setDark(!dark)
  }

  return (
    <SidebarWrapper>
      {/* Admin Info */}
      <AdminProfile>
        <AdminIcon>
          <FaUserCircle />
        </AdminIcon>
        <AdminName>Admin</AdminName>
      </AdminProfile>

      {/* Menu Items */}
      <SidebarMenu>
        <SidebarItemLink to="/admin/dashboard">
          <FaHome style={{ marginRight: '10px' }} />
          Dashboard
        </SidebarItemLink>

        <SidebarItemLink to="/admin/projects">
          <FaFolderOpen style={{ marginRight: '10px' }} />
          Project Manager
        </SidebarItemLink>
      </SidebarMenu>

      {/* Dưới cùng */}
      <div style={{ marginTop: 'auto' }}>
        <SidebarItemLink to="/admin/logout">
          <FaSignOutAlt style={{ marginRight: '10px' }} />
          Logout
        </SidebarItemLink>

        {/* Toggle Light/Dark Mode */}
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
  )
}

export default Sidebar
