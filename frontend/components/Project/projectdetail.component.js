import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import projectApi from '../../services/project.api'
import { BASE_URL } from '../../services/api'
import {
  DetailWrapper,
  DetailContainer,
  DetailTitle,
  DetailImage,
  DetailContent,
  DetailButtons,
  DetailButton,
} from './projectdetail.style'
import Menu from '../Menu/menu.component'

const ProjectDetail = ({ toggleTheme, isDarkMode }) => {
  const { id } = useParams()
  const [project, setProject] = useState(null)

  const fetchProject = async () => {
    try {
      const data = await projectApi.getProjectById(id)
      setProject(data)
    } catch (error) {
      console.error('Failed to fetch project:', error)
    }
  }

  useEffect(() => {
    fetchProject()
  }, [id])

  if (!project) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Menu toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <DetailWrapper>
        <DetailContainer>
          <DetailTitle>{project.title}</DetailTitle>
          <DetailImage
            src={`${BASE_URL}${project.image}`}
            alt={project.title}
          />

          <DetailButtons>
            {project.livelink && (
              <DetailButton
                as="a"
                href={project.livelink}
                target="_blank"
                rel="noopener noreferrer"
                $highlight
              >
                Live ↔↔
              </DetailButton>
            )}
            {project.repolink && (
              <DetailButton
                as="a"
                href={project.repolink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Repo ⇲
              </DetailButton>
            )}
          </DetailButtons>

          {/* Nội dung chi tiết */}
          <DetailContent
            dangerouslySetInnerHTML={{ __html: project.content }}
          />
        </DetailContainer>
      </DetailWrapper>
    </>
  )
}

export default ProjectDetail
