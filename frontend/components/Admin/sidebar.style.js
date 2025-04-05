import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const SidebarWrapper = styled.div`
  width: 260px;
  height: 100vh;
  background-color: #1e1e2f;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    transform: ${({ $isOpen }) =>
      $isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    background-color: #1e1e2f;
  }
`

export const SideTitle = styled.span`
  margin-left: 15px;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 800;
  font-size: 30px;
  color: ${({ theme }) => theme.accent};
  display: flex;
  align-items: center;
`

export const HamburgerButton = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: ${({ $isOpen }) => ($isOpen ? 'transparent' : '#1e1e2f')};
  z-index: 1100;
  display: none;
  align-items: center;
  padding: 0 20px;
  font-size: 24px;
  color: #c778dd;
  font-family: 'JetBrains Mono', monospace;
  font-weight: bold;
  gap: 15px;
  box-shadow: ${({ $isOpen }) =>
    $isOpen ? 'none' : '0 2px 8px rgba(0, 0, 0, 0.2)'};
  backdrop-filter: ${({ $isOpen }) => ($isOpen ? 'none' : 'blur(8px)')};

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    display: ${({ $isOpen }) => ($isOpen ? 'none' : 'inline')}; /* Ẩn chữ */
  }
`

export const SidebarOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 900;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`

export const AdminProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`

export const AdminIcon = styled.div`
  font-size: 80px;
  color: #c778dd;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 100px;
    margin-bottom: 20px;
  }
`

export const AdminName = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 18px;
  color: #ffffff;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`

export const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const SidebarItemLink = styled(NavLink)`
  font-family: 'JetBrains Mono', monospace;
  font-size: 15px;
  color: #ffffff;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 8px;
  transition: 0.3s ease;

  svg {
    font-size: 20px;
    margin-right: 10px;
  }

  &:hover {
    background-color: #2e2e4d;
  }

  &.active {
    background-color: #c778dd;
    color: #ffffff;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 15px 30px;

    svg {
      font-size: 26px;
      margin-right: 12px;
    }
  }
`

export const ThemeToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
  width: 100%;

  @media (max-width: 768px) {
    padding: 15px 30px;
  }
`

export const ThemeLabel = styled.div`
  display: flex;
  align-items: center;
  color: #ffffff;
  font-size: 14px;
  font-family: 'JetBrains Mono', monospace;
  gap: 10px;
  white-space: nowrap;

  svg {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    svg {
      font-size: 24px;
    }
  }
`

export const ThemeToggleWrapper = styled.div`
  width: 50px;
  height: 24px;
  background-color: #2e2e4d;
  border-radius: 50px;
  padding: 3px;
  display: flex;
  align-items: center;
  transition: background-color 0.3s ease;
`

export const ToggleCircle = styled.div`
  width: 18px;
  height: 18px;
  background-color: #c778dd;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${({ $isDark }) =>
    $isDark ? 'translateX(24px)' : 'translateX(0)'};
  transition: transform 0.3s ease;
  svg {
    font-size: 20px;
    color: white;
  }
`
