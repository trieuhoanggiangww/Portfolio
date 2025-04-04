import React from 'react'
import {
  Card,
  Preview,
  Stack,
  Title,
  Description,
  ButtonGroup,
  Button,
} from './projectcard.style'

const ProjectCard = ({ image, tech, title, desc, liveLink, repoLink }) => {
  return (
    <Card>
      <Preview src={image} alt={title} />
      <Stack>{tech}</Stack>
      <div style={{ padding: '20px' }}>
        <Title>{title}</Title>
        <Description>{desc}</Description>
        <ButtonGroup>
          {liveLink && (
            <Button $highlight as="a" href={liveLink} target="_blank">
              Live ↔↔
            </Button>
          )}
          {repoLink && (
            <Button as="a" href={repoLink} target="_blank">
              Repo ⇲
            </Button>
          )}
        </ButtonGroup>
      </div>
    </Card>
  )
}

export default ProjectCard
