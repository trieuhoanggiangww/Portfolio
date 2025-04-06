import styled from 'styled-components'

// ==== Section Layout ====
export const ProjectSectionWrapper = styled.section`
  width: 100%;
  padding: 100px 0;
  margin-top: 80px;
  background-color: transparent;
`

export const ProjectSectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 1240px) and (min-width: 1001px) {
    max-width: 1000px;
  }

  @media (max-width: 1000px) and (min-width: 769px) {
    max-width: 800px;
  }

  @media (max-width: 768px) {
    gap: 20px;
  }
`

// ==== Section Header ====
export const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 24px;
`

export const ProjectHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  flex-wrap: nowrap;
  min-width: 0;
`

export const ProjectHash = styled.span`
  color: #c778dd;
  font-weight: bold;
  font-size: 30px;
`

export const ProjectTitle = styled.h2`
  font-family: 'JetBrains Mono', monospace;
  font-size: 28px;
  color: ${({ theme }) => theme.text};
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`

export const ProjectLine = styled.div`
  flex: 1;
  height: 1px;
  background-color: #c778dd;
  opacity: 0.6;
  margin-left: 20px;
  margin-right: 20px;

  @media (max-width: 768px) {
    flex: 1;
    width: 20vw;
    margin-left: 10px;
  }
`

export const ProjectViewAll = styled.a`
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;

  display: inline-flex;
  align-items: center;
  gap: 6px;

  &:hover {
    text-decoration: underline;
  }
`
export const ProjectListWrapper = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-wrap: nowrap;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-padding-left: 20px;
    -webkit-overflow-scrolling: touch;
    padding: 10px 20px;
    justify-content: start;

    /* Ẩn scrollbar cho Chrome, Safari */
    &::-webkit-scrollbar {
      display: none;
    }

    /* Ẩn scrollbar cho Firefox */
    scrollbar-width: none;
  }
`

export const CarouselDots = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 16px;
  }
`

export const Dots = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ $active }) => ($active ? '#c778dd' : '#666')};
  transition: background-color 0.3s;
  cursor: pointer;
`
