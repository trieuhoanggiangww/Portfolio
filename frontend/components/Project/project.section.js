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
} from '../../screens/Project/project.style'
import { FaArrowRightLong } from 'react-icons/fa6'
import ProjectCard from './ProjectCard'
import projectApi from '../../services/project.api'
import { BASE_URL } from '../../services/api'

const Project = () => {
  const scrollRef = useRef()
  const [activeIndex, setActiveIndex] = useState(0)
  const [projects, setProjects] = useState([])

  const handleScroll = () => {
    const scrollLeft = scrollRef.current.scrollLeft
    const width = scrollRef.current.offsetWidth
    const index = Math.round(scrollLeft / (width * 0.8))
    setActiveIndex(index)
  }

  const fetchProjects = async () => {
    try {
      const data = await projectApi.getAllProjects()
      const majorProjects = data.filter(
        (project) => project.projectType === 'major'
      )
      setProjects(majorProjects)
    } catch (error) {
      console.error('Failed to fetch projects:', error)
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [])

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
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard
              key={project._id || index}
              image={`${BASE_URL}${project.image}`}
              tech={project.tech}
              title={project.title}
              startDate={project.startDate}
              endDate={project.endDate}
              desc={project.desc}
              liveLink={project.livelink}
              repoLink={project.repolink}
              detailLink={`/projects/${project._id}`}
            />
          ))}
        </ProjectListWrapper>

        <CarouselDots>
          {[...Array(Math.min(projects.length, 3))].map((_, i) => (
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
