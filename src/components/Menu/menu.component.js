import React, { useState } from 'react'
import {
  MyName,
  MenuBar,
  MenuItems,
  MenuItem,
  Hash,
  ThemeToggle,
  Hamburger,
  MobileMenu,
  CloseButton,
  MobileMenuItems,
  MobileMenuItem,
  MobileSocialIcons,
} from './menu.style'

import { FaSun, FaMoon, FaBars, FaGithub, FaFacebookF } from 'react-icons/fa'
import { SiZalo } from 'react-icons/si'

function Menu({ toggleTheme, isDarkMode }) {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  return (
    <>
      <MenuBar>
        <MyName>TRIEU HOANG GIANG</MyName>

        <Hamburger onClick={() => setShowMobileMenu(true)}>
          <FaBars />
        </Hamburger>

        <MenuItems>
          <MenuItem>
            <Hash>#</Hash>home
          </MenuItem>
          <MenuItem>
            <Hash>#</Hash>about-me
          </MenuItem>
          <MenuItem>
            <Hash>#</Hash>project
          </MenuItem>
          <MenuItem>
            <Hash>#</Hash>contact
          </MenuItem>
          <ThemeToggle onClick={toggleTheme}>
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </ThemeToggle>
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
            <Hash>#</Hash>home
          </MobileMenuItem>
          <MobileMenuItem>
            <Hash>#</Hash>about-me
          </MobileMenuItem>
          <MobileMenuItem>
            <Hash>#</Hash>project
          </MobileMenuItem>
          <MobileMenuItem>
            <Hash>#</Hash>contact
          </MobileMenuItem>
          <ThemeToggle onClick={toggleTheme}>
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </ThemeToggle>
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
