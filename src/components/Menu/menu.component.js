import React from 'react'
import { MenuBar, MenuItem, MenuItems } from './menu.styled'
import { FaUserCircle, FaSuitcase, FaPhoneAlt } from 'react-icons/fa'

function scrollTo(id) {
  const target = document.getElementById(id)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' })
    // console.log(` Scrolled to #${id} thành công`)
  } else {
    // console.warn(` Không tìm thấy phần tử với id: ${id}`)
  }
}

function Menu() {
  return (
    <MenuBar>
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
