import React, { useState, useEffect } from 'react'
import {
  AboutMeWrapper,
  AboutMeContainer,
  AboutMeText,
  AboutMeImage,
} from './aboutme.style'
import Avatar from '../../assets/img/avatar1.jpg'
import { FaArrowRight } from 'react-icons/fa'
import Quote from './Quote'
import settingApi from '../../services/setting.api'
import {
  ProjectHash,
  ProjectTitle,
  ProjectHeaderLeft,
} from '../../screens/Project/project.style'

function AboutMe() {
  const [showMore, setShowMore] = useState(false)
  const [aboutMeText, setAboutMeText] = useState('')

  const handleContactClick = () => {
    setShowMore(!showMore)
  }

  useEffect(() => {
    const fetchAboutMe = async () => {
      try {
        const settingData = await settingApi.getSetting()
        setAboutMeText(settingData.aboutMe || '')
      } catch (error) {
        console.error('Lỗi lấy About Me:', error)
      }
    }

    fetchAboutMe()
  }, [])

  return (
    <>
      <AboutMeWrapper id="about-me">
        <AboutMeContainer>
          <AboutMeText>
            <ProjectHeaderLeft>
              <ProjectHash>#</ProjectHash>
              <ProjectTitle>About-me</ProjectTitle>
            </ProjectHeaderLeft>
            <br />
            {aboutMeText ? (
              <>
                {showMore ? (
                  // Hiển thị toàn bộ AboutMeText, tách dòng theo \n
                  aboutMeText
                    .split('\n\n')
                    .map((paragraph, index) => <p key={index}>{paragraph}</p>)
                ) : (
                  // Hiển thị 500 ký tự đầu tiên
                  <p>
                    {aboutMeText.slice(0, 500)}
                    {aboutMeText.length > 500 ? '...' : ''}
                  </p>
                )}

                {/* Nút đọc thêm / thu gọn */}
                <button className="readmore-btn" onClick={handleContactClick}>
                  {showMore ? 'Thu gọn' : 'Đọc thêm'}
                  <FaArrowRight style={{ marginLeft: '10px' }} />
                </button>
              </>
            ) : (
              <p>Đang tải nội dung...</p>
            )}
          </AboutMeText>

          <AboutMeImage>
            <div className="avatar-wrapper">
              <img src={Avatar} alt="Triệu Hoàng Giang" />
              <div className="ready-for-job">
                <span className="dot" />
                Ready for job
              </div>
            </div>
          </AboutMeImage>
        </AboutMeContainer>
      </AboutMeWrapper>
      <Quote />
    </>
  )
}

export default AboutMe
