import styled from 'styled-components'

export const AboutMeWrapper = styled.section`
  width: 100%;
  padding: 100px 0;
  margin-top: 80px;
  background-color: transparent;
`

export const AboutMeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`

export const AboutMeText = styled.div`
  flex: 2;
  font-family: 'JetBrains Mono', monospace;
  color: ${({ theme }) => theme.text};

  h2 {
    font-size: 28px;
    color: #c778dd;
  }

  p {
    font-size: 16px;
    color: ${({ theme }) => theme.text};
    line-height: 1.7;
  }

  .readmore-btn {
    margin-top: 30px;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 600;
    border: 1px solid #c778dd;
    border-radius: 5px;
    cursor: pointer;
    background: transparent;
    transition: color 0.3s, border-color 0.3s, transform 0.2s ease;

    color: ${({ theme }) => theme.text};
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: ${({ theme }) => theme.accent};
      border-color: ${({ theme }) => theme.accent};
      transform: scale(1.05);
    }

    svg {
      margin-left: 8px;
    }
  }
`

export const AboutMeImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .avatar-wrapper {
    position: relative;
    width: 70%;
  }

  .ready-for-job {
    position: absolute;
    bottom: -35px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 0;
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.text};
    border: 2px solid #5c6370;

    background-color: ${({ theme }) => theme.background};
  }

  .dot {
    width: 12px;
    height: 12px;
    background-color: #00ff00;
    border-radius: 50%;
    margin-right: 8px;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border: solid 1px #5c6370;
  }
`

export const ContactButton = styled.div`
  margin-top: 30px;
  padding: 0;
  border: solid 1px ${({ theme }) => theme.text};
`
