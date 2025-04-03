import React from 'react'
import {
  MyName,
  MenuBar,
  MenuItems,
  MenuItem,
  Hash,
  ThemeToggle,
} from './menu.style'
import { FaSun, FaMoon } from 'react-icons/fa'

function Menu({ toggleTheme, isDarkMode }) {
  return (
    <MenuBar>
      <MyName>TRIEU HOANG GIANG</MyName>
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
  )
}

export default Menu
