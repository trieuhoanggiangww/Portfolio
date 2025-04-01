import React from 'react'
import { MenuBar, MenuItem, MenuItems } from './menu.styled'
import { FaUserCircle, FaSuitcase, FaPhoneAlt } from 'react-icons/fa'

function Menu() {
  return (
    <MenuBar>
      <MenuItems>
        <MenuItem>
          <FaUserCircle size={15} style={{ marginRight: '8px' }} />
          Giới thiệu
        </MenuItem>
        <MenuItem>
          <FaSuitcase size={15} style={{ marginRight: '8px' }} />
          Portfolio
        </MenuItem>
        <MenuItem>
          <FaPhoneAlt size={15} style={{ marginRight: '8px' }} />
          Liên hệ
        </MenuItem>
      </MenuItems>
    </MenuBar>
  )
}

export default Menu
