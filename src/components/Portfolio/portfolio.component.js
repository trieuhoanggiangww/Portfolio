import React, { useState } from 'react'
import {
  PortfolioSection,
  PortfolioTitle,
  ProjectList,
  ProjectCard,
  ProjectName,
  ProjectDescription,
  ProjectTech,
  ProjectLinks,
  ProjectLink,
} from './portfolio.styled'
import Modal from './modal.component'

function Portfolio() {
  const [modalMessage, setModalMessage] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (message) => {
    setModalMessage(message)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setModalMessage('')
  }

  return (
    <PortfolioSection id="portfolio">
      <PortfolioTitle>Một Số Dự Án Đã Tham Gia:</PortfolioTitle>
      <ProjectList>
        <ProjectCard>
          <ProjectName>Quản lý sản phẩm CMS</ProjectName>
          <ProjectDescription>
            Hệ thống quản lý sản phẩm, đơn hàng và người dùng dành cho shop bán
            hàng online.
          </ProjectDescription>
          <ProjectTech>
            React · Node.js · MongoDB · JWT · Cloudinary
          </ProjectTech>
          <ProjectLinks>
            <ProjectLink
              as="button"
              onClick={() => openModal('Đây là dự án private.')}
            >
              GitHub
            </ProjectLink>
            <ProjectLink
              as="button"
              onClick={() =>
                openModal('Dự án sử dụng nội bộ, không có link public.')
              }
            >
              Live
            </ProjectLink>
          </ProjectLinks>
        </ProjectCard>

        <ProjectCard>
          <ProjectName>Game Xếp hạng Online</ProjectName>
          <ProjectDescription>
            Web game có hệ thống xếp hạng người chơi, đăng nhập và bảng điểm
            thật.
          </ProjectDescription>
          <ProjectTech>React · Express · Socket.io · SQL Server</ProjectTech>
          <ProjectLinks>
            <ProjectLink
              as="button"
              onClick={() => openModal('Dự án này hiện chưa public.')}
            >
              GitHub
            </ProjectLink>
          </ProjectLinks>
        </ProjectCard>
      </ProjectList>

      {isModalOpen && <Modal message={modalMessage} onClose={closeModal} />}
    </PortfolioSection>
  )
}

export default Portfolio
