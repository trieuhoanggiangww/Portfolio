import React, { useRef, useState, useEffect } from 'react'
import {
  ProjectSectionWrapper,
  ProjectSectionContainer,
  ProjectHeader,
  ProjectHeaderLeft,
  ProjectHash,
  ProjectTitle,
  ProjectLine,
  ProjectViewAll,
  ProjectListWrapper,
  CarouselDots,
  Dots,
} from './project.style'

import { FaArrowRightLong } from 'react-icons/fa6'
import ProjectCard from './ProjectCard'
import Img1 from '../../assets/img/avatar.jpg'
import Img2 from '../../assets/img/avatar.jpg'
import Img3 from '../../assets/img/avatar.jpg'

const Project = () => {
  const scrollRef = useRef()
  const [activeIndex, setActiveIndex] = useState(0)
  const totalProjects = 3

  const handleScroll = () => {
    const scrollLeft = scrollRef.current.scrollLeft
    const width = scrollRef.current.offsetWidth
    const index = Math.round(scrollLeft / (width * 0.8))
    setActiveIndex(index)
  }

  useEffect(() => {
    const ref = scrollRef.current
    if (!ref) return
    ref.addEventListener('scroll', handleScroll)
    return () => ref.removeEventListener('scroll', handleScroll)
  }, [])

  const handleDotClick = (index) => {
    const width = scrollRef.current.offsetWidth
    scrollRef.current.scrollTo({
      left: index * width * 0.8,
      behavior: 'smooth',
    })
    setActiveIndex(index)
  }

  return (
    <ProjectSectionWrapper id="projects">
      <ProjectSectionContainer>
        <ProjectHeader>
          <ProjectHeaderLeft>
            <ProjectHash>#</ProjectHash>
            <ProjectTitle>Projects</ProjectTitle>
            <ProjectLine />
          </ProjectHeaderLeft>
          <ProjectViewAll href="/projects">
            View all
            <FaArrowRightLong
              style={{ marginLeft: '6px', position: 'relative', top: '1px' }}
            />
          </ProjectViewAll>
        </ProjectHeader>

        <ProjectListWrapper ref={scrollRef}>
          <ProjectCard
            image={Img1}
            tech="React.js · Node.js · MongoDB "
            title="EPEBEN - Quản Lí Đơn Hàng"
            desc="Hệ thống quản lý đơn hàng, giúp theo dõi trạng thái từ sản xuất đến
            giao vận. Hỗ trợ phân biệt rõ ràng các loại sản phẩm."
            liveLink="https://example.com"
            repoLink="https://github.com/giang/chertnodes"
          />
          <ProjectCard
            image={Img2}
            tech="React.js · Node.js · MongoDB"
            title="EPEBEN - Quản Lí Sản Phẩm"
            desc="Hệ thống thu thập và quản lý dữ liệu sản phẩm từ các sàn TMĐT Trung
            Quốc (Taobao, Tmall, 1688), hỗ trợ xuất/nhập Excel, chỉnh sửa sản
            phẩm và lưu trữ ảnh trên Google Cloud / Google Drive"
            liveLink="https://protectx.example.com"
            repoLink="https://github.com/giang/protectx"
          />
          <ProjectCard
            image={Img3}
            tech="React.js · Node.js · MongoDB"
            title="BNS HongMoon Website"
            desc="Trang web vận hành và quản lý server Blade & Soul HongMoon"
            liveLink="https://bnshongmoon.com"
            repoLink="https://github.com/giang/kahoot-viewer"
          />
        </ProjectListWrapper>

        <CarouselDots>
          {[...Array(totalProjects)].map((_, i) => (
            <Dots
              key={i}
              $active={i === activeIndex}
              onClick={() => handleDotClick(i)}
            />
          ))}
        </CarouselDots>
      </ProjectSectionContainer>
    </ProjectSectionWrapper>
  )
}

export default Project
