import styled from 'styled-components'

// ---------------------------------------SocialBar------------------------------------
export const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 60px;
  height: 100vh;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 1000;

  @media (max-width: 768px) {
    display: none;
  }
`

export const Line = styled.div`
  width: 1px;
  height: 120px;
  background-color: #5c6370;
  margin-bottom: 10px;
`

export const IconWrapper = styled.a`
  color: ${({ theme }) => theme.menuText};
  font-size: 20px;
  margin: 12px 0;
  transition: color 0.3s, transform 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${({ theme }) => theme.text};
    transform: scale(1.1);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`
// ---------------------------------------SocialBar------------------------------------
