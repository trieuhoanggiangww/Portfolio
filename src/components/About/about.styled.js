import styled from 'styled-components'

export const AboutSection = styled.section`
  background-color: #2a2a2a;
  width: 900px;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  margin: 40px auto 60px;
`

export const AboutContent = styled.div`
  display: flex;
  gap: 40px;
  max-width: 960px;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`

export const AboutLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ProfileImage = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
`

export const Role = styled.div`
  font-size: 16px;
  color: #f0a500;
  font-weight: 600;
`

export const AboutRight = styled.div`
  flex: 1;
  min-width: 280px;
`

export const AboutTitle = styled.h2`
  font-size: 28px;
  color: #f0a500;
  margin-bottom: 16px;
`

export const AboutText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #ffffffcc;

  @media (max-width: 480px) {
    font-size: 15px;
  }
`
export const StatusBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #1e1e1e;
  color: #ffffffcc;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 4px 12px;
  border-radius: 999px;
  margin-bottom: 12px;
`

export const Dot = styled.span`
  width: 8px;
  height: 8px;
  background-color: rgb(255, 0, 4);
  border-radius: 50%;
`
export const ContactInfo = styled.div`
  margin-top: 16px;
  text-align: center;
`

export const ContactRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 14px;
  color: #ffffffcc;

  span strong {
    color: #fff;
    font-weight: 600;
  }
`

export const CopyIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #999;
  font-size: 14px;
  transition: color 0.2s;

  &:hover {
    color: #f0a500;
  }
`

export const CopiedNote = styled.div`
  font-size: 12px;
  color: #4caf50;
  margin-top: 4px;
`
export const CopiedIcon = styled.div`
  margin-top: 4px;
  color: #4caf50;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeOut 1.2s forwards;

  @keyframes fadeOut {
    0% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(1.2);
    }
  }
`
