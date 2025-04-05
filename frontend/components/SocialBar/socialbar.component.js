import React, { useEffect, useState } from 'react'
import { FaFacebookF, FaGithub } from 'react-icons/fa'
import { SiZalo } from 'react-icons/si'
import { Sidebar, Line, IconWrapper } from './socialbar.style'
import settingApi from '../../services/setting.api'

function SocialBar() {
  const [contactInfo, setContactInfo] = useState(null)

  useEffect(() => {
    const fetchSetting = async () => {
      try {
        const data = await settingApi.getSetting()
        setContactInfo(data.contactInfo)
      } catch (error) {
        console.error('Lỗi tải thông tin liên hệ:', error)
      }
    }
    fetchSetting()
  }, [])

  if (!contactInfo) return null // Nếu chưa load xong thì không hiển thị

  return (
    <Sidebar>
      <Line />
      {contactInfo.zalo && (
        <IconWrapper href={contactInfo.zalo} target="_blank" aria-label="Zalo">
          <SiZalo />
        </IconWrapper>
      )}
      {contactInfo.facebook && (
        <IconWrapper
          href={contactInfo.facebook}
          target="_blank"
          aria-label="Facebook"
        >
          <FaFacebookF />
        </IconWrapper>
      )}
      {contactInfo.github && (
        <IconWrapper
          href={contactInfo.github}
          target="_blank"
          aria-label="GitHub"
        >
          <FaGithub />
        </IconWrapper>
      )}
    </Sidebar>
  )
}

export default SocialBar
