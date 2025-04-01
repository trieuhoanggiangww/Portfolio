import React from 'react'
import { MenuBar, MenuItem, MenuItems } from './menu.styled'
import { FaUserCircle, FaSuitcase, FaPhoneAlt } from 'react-icons/fa'

function scrollTo(id) {
  const target = document.getElementById(id)
  if (target) {
    const y = target.getBoundingClientRect().top + window.scrollY
    const offset = -40
    window.scrollTo({
      top: y + offset,
      behavior: 'smooth',
    })
  }
}

function Menu({ isSticky }) {
  return (
    <MenuBar $sticky={isSticky}>
      <MenuItems>
        <MenuItem onClick={() => scrollTo('about')}>
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
