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
  ThemeToggleContainer,
  ThemeLabel,
  ThemeSwitch,
  SwitchCircle,
} from './menu.style'
import settingApi from '../../services/setting.api'

import { FaSun, FaMoon, FaBars, FaGithub, FaFacebookF } from 'react-icons/fa'
import { SiZalo } from 'react-icons/si'

function Menu({ toggleTheme, isDarkMode }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [contactInfo, setContactInfo] = useState(null)

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
      <MenuBar>
        <MyName>TRIEU HOANG GIANG</MyName>

        <Hamburger onClick={() => setShowMobileMenu(true)}>
          <FaBars />
        </Hamburger>

        <MenuItems>
          <MenuItem>
            <Hash>#</Hash>About-me
          </MenuItem>
          <MenuItem>
            <Hash>#</Hash>Projects
          </MenuItem>
          <MenuItem>
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

      <MobileMenu $isOpen={showMobileMenu}>
        <CloseButton onClick={() => setShowMobileMenu(false)}>×</CloseButton>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <MyName style={{ fontSize: '1.1rem' }}>TRIEU HOANG GIANG</MyName>
          <CloseButton onClick={() => setShowMobileMenu(false)}>×</CloseButton>
        </div>

        <MobileMenuItems>
          <MobileMenuItem>
            <Hash>#</Hash>About-me
          </MobileMenuItem>
          <MobileMenuItem>
            <Hash>#</Hash>Projects
          </MobileMenuItem>
          <MobileMenuItem>
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
