import React, { useState, useEffect } from 'react'
import {
  ContactSectionWrapper,
  ContactSectionContainer,
  ContactContent,
  ContactText,
  ContactBox,
  ContactBoxTitle,
  ContactItem,
  ContactLink,
} from './contact.style'

import {
  ProjectHash,
  ProjectTitle,
  ProjectLine,
  ProjectHeaderLeft,
} from '../../screens/Project/project.style'
import { FaEnvelope, FaPhoneAlt, FaFacebookF } from 'react-icons/fa'
import { SiZalo } from 'react-icons/si'
import settingApi from '../../services/setting.api'

const ContactSection = () => {
  const [contactInfo, setContactInfo] = useState(null)

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const data = await settingApi.getSetting()
        setContactInfo(data.contactInfo)
      } catch (error) {
        console.error('Lỗi tải contact info:', error)
      }
    }
    fetchContact()
  }, [])

  return (
    <ContactSectionWrapper id="contact">
      <ContactSectionContainer>
        <ProjectHeaderLeft>
          <ProjectHash>#</ProjectHash>
          <ProjectTitle>contact</ProjectTitle>
          <ProjectLine />
        </ProjectHeaderLeft>

        <ContactContent>
          <ContactText>
            Hiện tại mình đang tìm kiếm những cơ hội mới để cộng tác.
            <br />
            Đừng ngần ngại liên hệ nếu bạn muốn hợp tác, đặt câu hỏi, hoặc đơn
            giản chỉ để trò chuyện!
          </ContactText>

          <ContactBox>
            <ContactBoxTitle>Liên hệ với mình</ContactBoxTitle>

            {contactInfo?.email && (
              <ContactItem>
                <FaEnvelope />
                <ContactLink href={`mailto:${contactInfo.email}`}>
                  {contactInfo.email}
                </ContactLink>
              </ContactItem>
            )}

            {contactInfo?.phone && (
              <ContactItem>
                <FaPhoneAlt />
                <ContactLink href={`tel:${contactInfo.phone}`}>
                  {contactInfo.phone}
                </ContactLink>
              </ContactItem>
            )}

            {contactInfo?.zalo && (
              <ContactItem>
                <SiZalo />
                <ContactLink
                  href={contactInfo.zalo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Zalo
                </ContactLink>
              </ContactItem>
            )}

            {contactInfo?.facebook && (
              <ContactItem>
                <FaFacebookF />
                <ContactLink
                  href={contactInfo.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </ContactLink>
              </ContactItem>
            )}
          </ContactBox>
        </ContactContent>
      </ContactSectionContainer>
    </ContactSectionWrapper>
  )
}

export default ContactSection
