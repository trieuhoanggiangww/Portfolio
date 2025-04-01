import styled from 'styled-components'

export const PortfolioSection = styled.section`
  width: 900px;
  margin: 50px auto 60px;
  padding: 32px;
  background-color: #2a2a2a;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
`

export const PortfolioTitle = styled.h2`
  font-size: 28px;
  color: #f0a500;
  margin-bottom: 32px;
  text-align: left;
`

export const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const ProjectCard = styled.div`
  background-color: #1e1e1e;
  padding: 20px;
  border-radius: 10px;
  color: #ffffffcc;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`

export const ProjectName = styled.h3`
  font-size: 20px;
  margin-bottom: 8px;
  color: #fff;
`

export const ProjectDescription = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`

export const ProjectTech = styled.div`
  font-size: 13px;
  font-style: italic;
  color: #f0a500;
  margin-bottom: 12px;
`

export const ProjectLinks = styled.div`
  display: flex;
  gap: 12px;
`

export const ProjectLink = styled.a`
  font-size: 13px;
  color: #ffffffcc;
  text-decoration: underline;
  cursor: pointer;
  background: none;
  border: none;
  font-style: italic;
  text-align: left;
  display: inline-block;
  padding: 0;
  margin: 0;
  &:hover {
    color: #f0a500;
  }

  &.unstyled-button {
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    color: inherit;
    text-align: left;
    cursor: pointer;
  }
`
