import React, { useEffect, useState } from 'react'
import {
  ProjectSectionWrapper,
  ProjectSectionContainer,
  ProjectHeader,
  ProjectHeaderLeft,
  ProjectHash,
  ProjectTitle,
  ProjectLine,
  ProjectListWrapper,
} from './project.style'
import ProjectCard from '../../components/Project/ProjectCard'
import projectApi from '../../services/project.api'
import { BASE_URL } from '../../services/api'
import Menu from '../../components/Menu/menu.component'
import Footer from '../../components/Footer/footer.component'

const ProjectScreen = ({ toggleTheme, isDarkMode }) => {
  const [majorProjects, setMajorProjects] = useState([])
  const [minorProjects, setMinorProjects] = useState([])

  const parseDateString = (dateStr) => {
    if (!dateStr) return 0
    const parts = dateStr.split(/[-/]/)
    if (parts.length === 2) {
      const [month, year] = parts[0].length === 4 ? [parts[1], parts[0]] : parts
      return parseInt(year) * 100 + parseInt(month)
    }
    return 0
  }

  const fetchProjects = async () => {
    try {
      const data = await projectApi.getAllProjects()

      const major = data
        .filter((project) => project.projectType === 'major')
        .sort((a, b) => {
          const aDate = parseDateString(a.endDate || a.startDate)
          const bDate = parseDateString(b.endDate || b.startDate)
          return bDate - aDate
        })

      const minor = data
        .filter((project) => project.projectType === 'minor')
        .sort((a, b) => {
          const aDate = parseDateString(a.endDate || a.startDate)
          const bDate = parseDateString(b.endDate || b.startDate)
          return bDate - aDate
        })

      setMajorProjects(major)
      setMinorProjects(minor)
    } catch (error) {
      console.error('Failed to fetch projects:', error)
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  return (
    <>
      <Menu toggleTheme={toggleTheme} isDarkMode={isDarkMode} />

      <ProjectSectionWrapper id="projects">
        <ProjectSectionContainer>
          <ProjectHeader>
            <ProjectHeaderLeft
              style={{ flexDirection: 'column', alignItems: 'flex-start' }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <ProjectHash>/</ProjectHash>
                <ProjectTitle>projects</ProjectTitle>
              </div>
              <p style={{ marginTop: '15px' }}>Danh sách dự án</p>
            </ProjectHeaderLeft>
          </ProjectHeader>

          <ProjectHeader>
            <ProjectHeaderLeft>
              <ProjectHash>#</ProjectHash>
              <ProjectTitle>Complete-projects</ProjectTitle>
              <ProjectLine />
            </ProjectHeaderLeft>
          </ProjectHeader>

          <ProjectListWrapper style={{ flexWrap: 'wrap', gap: '20px' }}>
            {majorProjects.length > 0 ? (
              majorProjects.map((project, index) => (
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
              ))
            ) : (
              <p>Hiện chưa có dự án hoàn thành nào.</p>
            )}
          </ProjectListWrapper>

          <ProjectHeader style={{ marginTop: '40px' }}>
            <ProjectHeaderLeft>
              <ProjectHash>#</ProjectHash>
              <ProjectTitle>Small-projects</ProjectTitle>
              <ProjectLine />
            </ProjectHeaderLeft>
          </ProjectHeader>

          <ProjectListWrapper style={{ flexWrap: 'wrap', gap: '20px' }}>
            {minorProjects.length > 0 ? (
              minorProjects.map((project, index) => (
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
                  hideImage={true}
                />
              ))
            ) : (
              <p>Hiện chưa có dự án nhỏ nào.</p>
            )}
          </ProjectListWrapper>
        </ProjectSectionContainer>
      </ProjectSectionWrapper>

      <Footer />
    </>
  )
}

export default ProjectScreen
