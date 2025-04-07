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

const ProjectCard = ({
  image,
  tech,
  title,
  desc,
  liveLink,
  repoLink,
  detailLink,
  hideImage = false,
}) => {
  const buttons = []

  if (liveLink) {
    buttons.push(
      <Button
        key="live"
        $highlight
        as="a"
        href={liveLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Live ↔↔
      </Button>
    )
  }

  if (repoLink) {
    buttons.push(
      <Button
        key="repo"
        as="a"
        href={repoLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Repo ⇲
      </Button>
    )
  }

  buttons.push(
    <Button
      key="detail"
      as="a"
      href={detailLink}
      rel="noopener noreferrer"
      style={buttons.length > 0 ? { marginLeft: 'auto' } : {}}
    >
      Detail →
    </Button>
  )

  return (
    <Card>
      {!hideImage && <Preview src={image} alt={title} />}
      <Stack>{tech}</Stack>
      <div style={{ padding: '20px' }}>
        <Title>{title}</Title>
        <Description>{desc}</Description>

        <ButtonGroup>{buttons}</ButtonGroup>
      </div>
    </Card>
  )
}

export default ProjectCard
