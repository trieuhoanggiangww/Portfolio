import React from 'react'
import { MyName, MenuBar, MenuItems, MenuItem, Hash } from './menu.style'

function Menu() {
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
      </MenuItems>
    </MenuBar>
  )
}

export default Menu
