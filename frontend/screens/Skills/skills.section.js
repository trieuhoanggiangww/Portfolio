import React from 'react'
import {
  SkillSectionWrapper,
  SkillSectionContainer,
  SkillsRow,
  SkillGroup,
  SkillGroupTitle,
  SkillGroupContent,
} from './skills.style'

import {
  ProjectHash,
  ProjectTitle,
  ProjectLine,
  ProjectHeaderLeft,
} from '../Project/project.style'

const SkillSection = () => {
  return (
    <SkillSectionWrapper id="skills">
      <SkillSectionContainer>
        {/* Title */}
        <ProjectHeaderLeft>
          <ProjectHash>#</ProjectHash>
          <ProjectTitle>skills</ProjectTitle>
          <ProjectLine />
        </ProjectHeaderLeft>
        {/* 3 box */}
        <SkillsRow>
          <SkillGroup>
            <SkillGroupTitle>Languages</SkillGroupTitle>
            <SkillGroupContent>
              JavaScript
              <br />
              Dart
              <br />
              C# (C-Sharp)
              <br />
              Python
            </SkillGroupContent>
          </SkillGroup>

          <SkillGroup>
            <SkillGroupTitle>Frontend</SkillGroupTitle>
            <SkillGroupContent>
              React.js
              <br />
              Flutter
              <br />
              HTML
              <br />
              CSS
            </SkillGroupContent>
          </SkillGroup>

          <SkillGroup>
            <SkillGroupTitle>Backend</SkillGroupTitle>
            <SkillGroupContent>
              Node.js
              <br />
              Express.js
              <br />
              .NET Framework
              <br />
              RESTful API
              <br />
              OAuth 2.0
              <br />
              JWT
            </SkillGroupContent>
          </SkillGroup>
        </SkillsRow>

        {/* 2 box */}
        <SkillsRow>
          <SkillGroup>
            <SkillGroupTitle>Databases</SkillGroupTitle>
            <SkillGroupContent>
              SQL: MySQL • SQL Server
              <br />
              NoSQL: MongoDB
            </SkillGroupContent>
          </SkillGroup>

          <SkillGroup>
            <SkillGroupTitle>Tools & DevOps</SkillGroupTitle>
            <SkillGroupContent>
              Docker
              <br />
              Git
              <br />
              Nginx
              <br />
              Linux Server
              <br />
              Windows Server
              <br />
              Postman
              <br />
              Figma
            </SkillGroupContent>
          </SkillGroup>
        </SkillsRow>

        {/* 1 box */}
        <SkillsRow>
          <SkillGroup>
            <SkillGroupTitle>Cloud Services</SkillGroupTitle>
            <SkillGroupContent>
              Google Cloud Platform
              <br />
              Microsoft Azure
            </SkillGroupContent>
          </SkillGroup>
        </SkillsRow>
      </SkillSectionContainer>
    </SkillSectionWrapper>
  )
}

export default SkillSection
