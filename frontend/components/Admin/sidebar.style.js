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
`

export const AdminName = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 18px;
  color: #ffffff;
  font-weight: bold;
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
  }

  &:hover {
    background-color: #2e2e4d;
  }

  &.active {
    background-color: #c778dd;
    color: #ffffff;
  }
`
export const ThemeToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding: 0 18px;
  cursor: pointer;
  width: 100%;
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
