import React from 'react'
import { FaFacebookF, FaGithub } from 'react-icons/fa'
import { SiZalo } from 'react-icons/si'
import { Sidebar, Line, IconWrapper } from './socialbar.style'

function SocialBar() {
  return (
    <Sidebar>
      <Line />
      <IconWrapper
        href="https://zalo.me/0362110139"
        target="_blank"
        aria-label="Zalo"
      >
        <SiZalo />
      </IconWrapper>
      <IconWrapper
        href="https://www.facebook.com/dungkhumngu/"
        target="_blank"
        aria-label="Facebook"
      >
        <FaFacebookF />
      </IconWrapper>
      <IconWrapper
        href="https://github.com/trieuhoanggiangww"
        target="_blank"
        aria-label="GitHub"
      >
        <FaGithub />
      </IconWrapper>
    </Sidebar>
  )
}

export default SocialBar
