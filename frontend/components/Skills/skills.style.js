import styled from 'styled-components'

export const SkillSectionWrapper = styled.section`
  width: 100%;
  padding: 100px 0;
  background-color: transparent;
`

export const SkillSectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`

export const SkillsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

export const SkillGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 260px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
  }
`

export const SkillGroupTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  padding: 10px 20px;
  border: 1px solid #5c6370;
  font-family: 'JetBrains Mono', monospace;
  color: ${({ theme }) => theme.text};
`

export const SkillGroupContent = styled.p`
  font-size: 14px;
  margin: 0;
  padding: 10px 20px;
  border: 1px solid #5c6370;
  font-family: 'JetBrains Mono', monospace;
  color: ${({ theme }) => theme.text};
  white-space: pre-line;
  border-top: none;
`
