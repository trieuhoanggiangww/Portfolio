import React, { useState, useEffect } from 'react'
import {
  MyName,
  MenuBar,
  MenuItems,
  MenuItem,
  Hash,
  Hamburger,
  MobileMenu,
  CloseButton,
  MobileMenuItems,
  MobileMenuItem,
  MobileSocialIcons,
  ThemeSwitch,
  SwitchCircle,
} from './menu.style'
import { FaSun, FaMoon, FaBars, FaGithub, FaFacebookF } from 'react-icons/fa'
import { SiZalo } from 'react-icons/si'
import settingApi from '../../services/setting.api'
import { useScrollToSection } from '../../hooks/useScrollToSection'

function Menu({ toggleTheme, isDarkMode }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [contactInfo, setContactInfo] = useState(null)

  const handleScrollToSection = useScrollToSection()

  const handleThemeToggle = () => {
    toggleTheme()
  }

  useEffect(() => {
    const fetchSetting = async () => {
      try {
        const data = await settingApi.getSetting()
        setContactInfo(data.contactInfo)
      } catch (error) {
        console.error('Lỗi tải contact info:', error)
      }
    }
    fetchSetting()
  }, [])

  return (
    <>
      {/* --- Desktop Menu --- */}
      <MenuBar>
        <MyName
          style={{ cursor: 'pointer' }}
          onClick={() => handleScrollToSection('')}
        >
          TRIEU HOANG GIANG
        </MyName>

        <Hamburger onClick={() => setShowMobileMenu(true)}>
          <FaBars />
        </Hamburger>

        <MenuItems>
          <MenuItem onClick={() => handleScrollToSection('about-me')}>
            <Hash>#</Hash>About-me
          </MenuItem>
          <MenuItem onClick={() => handleScrollToSection('projects')}>
            <Hash>#</Hash>Projects
          </MenuItem>
          <MenuItem onClick={() => handleScrollToSection('contact')}>
            <Hash>#</Hash>Contact
          </MenuItem>

          {/* Switch Light/Dark */}
          <ThemeSwitch onClick={handleThemeToggle}>
            <SwitchCircle $isDark={isDarkMode}>
              {isDarkMode ? <FaSun size={10} /> : <FaMoon size={10} />}
            </SwitchCircle>
          </ThemeSwitch>
        </MenuItems>
      </MenuBar>

      {/* --- Mobile Menu --- */}
      <MobileMenu $isOpen={showMobileMenu}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 20px',
          }}
        >
          <MyName
            style={{ fontSize: '1.1rem', cursor: 'pointer' }}
            onClick={() => {
              handleScrollToSection('')
              setShowMobileMenu(false)
            }}
          >
            TRIEU HOANG GIANG
          </MyName>
          <CloseButton onClick={() => setShowMobileMenu(false)}>×</CloseButton>
        </div>

        <MobileMenuItems>
          <MobileMenuItem
            onClick={() => {
              handleScrollToSection('about-me')
              setShowMobileMenu(false)
            }}
          >
            <Hash>#</Hash>About-me
          </MobileMenuItem>
          <MobileMenuItem
            onClick={() => {
              handleScrollToSection('projects')
              setShowMobileMenu(false)
            }}
          >
            <Hash>#</Hash>Projects
          </MobileMenuItem>
          <MobileMenuItem
            onClick={() => {
              handleScrollToSection('contact')
              setShowMobileMenu(false)
            }}
          >
            <Hash>#</Hash>Contact
          </MobileMenuItem>

          {/* Mobile Switch Light/Dark */}
          <ThemeSwitch onClick={handleThemeToggle}>
            <SwitchCircle $isDark={isDarkMode}>
              {isDarkMode ? <FaSun size={10} /> : <FaMoon size={10} />}
            </SwitchCircle>
          </ThemeSwitch>
        </MobileMenuItems>

        <MobileSocialIcons>
          {contactInfo?.zalo && (
            <a
              href={contactInfo.zalo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiZalo />
            </a>
          )}
          {contactInfo?.facebook && (
            <a
              href={contactInfo.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
          )}
          {contactInfo?.github && (
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          )}
        </MobileSocialIcons>
      </MobileMenu>
    </>
  )
}

export default Menu
