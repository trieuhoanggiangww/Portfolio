import React, { useEffect, useState } from 'react'
import {
  FooterWrapper,
  FooterContainer,
  FooterContent,
  FooterLeft,
  FooterRight,
  FooterName,
  FooterEmail,
  FooterDescription,
  FooterMediaTitle,
  FooterMediaIcons,
  FooterIconLink,
  FooterCopyright,
} from './footer.style'

import { FaGithub, FaFacebookF } from 'react-icons/fa'
import { SiZalo } from 'react-icons/si'
import settingApi from '../../services/setting.api'

const Footer = () => {
  const [contactInfo, setContactInfo] = useState(null)

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const data = await settingApi.getSetting()
        setContactInfo(data.contactInfo)
      } catch (error) {
        console.error('Failed to fetch contact info:', error)
      }
    }

    fetchContactInfo()
  }, [])

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterContent>
          <FooterLeft>
            <FooterName>TRIEU HOANG GIANG</FooterName>
            <FooterEmail>
              {contactInfo?.email || 'your-email@example.com'}
            </FooterEmail>
            <FooterDescription>Fullstack Developer</FooterDescription>
          </FooterLeft>

          <FooterRight>
            <FooterMediaTitle>Media</FooterMediaTitle>
            <FooterMediaIcons>
              {contactInfo?.github && (
                <FooterIconLink
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={18} />
                </FooterIconLink>
              )}
              {contactInfo?.facebook && (
                <FooterIconLink
                  href={contactInfo.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF size={18} />
                </FooterIconLink>
              )}
              {contactInfo?.zalo && (
                <FooterIconLink
                  href={contactInfo.zalo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiZalo size={18} />
                </FooterIconLink>
              )}
            </FooterMediaIcons>
          </FooterRight>
        </FooterContent>

        <FooterCopyright>
          © Copyright {new Date().getFullYear()}. Made by Trieu Hoang Giang.
        </FooterCopyright>
      </FooterContainer>
    </FooterWrapper>
  )
}

export default Footer
