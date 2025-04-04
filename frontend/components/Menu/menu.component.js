import React, { useState } from 'react'
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

import { FaSun, FaMoon, FaBars, FaGithub, FaFacebookF } from 'react-icons/fa'
import { SiZalo } from 'react-icons/si'

function Menu({ toggleTheme, isDarkMode }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const handleThemeToggle = () => {
    toggleTheme()
  }

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
          <a
            href="https://zalo.me/0362110139"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiZalo />
          </a>
          <a
            href="https://www.facebook.com/dungkhumngu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://github.com/trieuhoanggiangww"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </MobileSocialIcons>
      </MobileMenu>
    </>
  )
}

export default Menu
