import React, { useState } from 'react'
import {
  AboutSection,
  AboutContent,
  AboutLeft,
  ProfileImage,
  Role,
  AboutRight,
  AboutTitle,
  AboutText,
  StatusBadge,
  Dot,
  ContactInfo,
  ContactRow,
  CopyIcon,
} from './about.styled'
import Avatar from '../../assets/img/avatar.jpg'
import { FaPhoneAlt, FaEnvelope, FaRegCopy, FaCheck } from 'react-icons/fa'

function About() {
  const phone = '0362 110 139'
  const [copied, setCopied] = useState(false)
  const email = 'trieuhoanggiangww@gmail.com'
  const [emailCopied, setEmailCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 1500)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(phone)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <AboutSection id="about">
      <AboutContent>
        <AboutLeft>
          <StatusBadge>
            <Dot />
            AVAILABLE FOR JOB
          </StatusBadge>

          <ProfileImage src={Avatar} alt="Avatar" />
          <Role>FullStack Developer</Role>

          <ContactInfo>
            <ContactRow>
              <span>
                Số điện thoại: <strong>{phone}</strong>
              </span>
              <CopyIcon
                onClick={handleCopy}
                title={copied ? 'Đã sao chép' : 'Sao chép'}
              >
                {copied ? <FaCheck /> : <FaRegCopy />}
              </CopyIcon>
            </ContactRow>
            <ContactRow>
              <span>
                Email: <strong>{email}</strong>
              </span>
              <CopyIcon
                onClick={handleCopyEmail}
                title={emailCopied ? 'Đã sao chép' : 'Sao chép'}
              >
                {emailCopied ? <FaCheck /> : <FaRegCopy />}
              </CopyIcon>
            </ContactRow>
          </ContactInfo>
        </AboutLeft>

        <AboutRight>
          <AboutTitle>Giới thiệu</AboutTitle>
          <AboutText>
            Mình là Giang – một Fullstack Developer đã từng tham gia nhiều dự án
            từ A-Z, nên mình hiểu khá rõ cách một sản phẩm hoạt động từ backend
            đến frontend.
            <br />
            <br />
            Nhưng điều quan trọng nhất mình học được không phải là “làm được mọi
            thứ”, mà là biết "làm gì cho đúng", và "phối hợp với team để mọi thứ
            chạy mượt mà".
            <br />
            <br />
            Mình từng làm việc trực tiếp với designer, QA, khách hàng và cũng
            từng tự xử lý các lỗi production. Vậy nên mình hiểu rằng viết code
            chỉ là một phần — phần còn lại là giao tiếp, trách nhiệm và tinh
            thần làm việc cùng nhau.
            <br />
            <br />
            Mình luôn ưu tiên viết code rõ ràng, dễ hiểu và dễ bảo trì — vì mình
            tin rằng một sản phẩm tốt bắt đầu từ sự chỉn chu trong từng dòng
            code.
          </AboutText>
        </AboutRight>
      </AboutContent>
    </AboutSection>
  )
}

export default About
