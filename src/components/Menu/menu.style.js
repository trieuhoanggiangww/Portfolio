import styled from 'styled-components'

// ------------------------------------Menu----------------------------------------
export const MenuBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 200px;
  background-color: ${({ theme }) => theme.background}; // đồng bộ nền
  transition: background-color 0.3s ease;
`

export const MenuItems = styled.div`
  display: flex;
  gap: 50px;
`

export const MyName = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-weight: 800;
  color: ${({ theme }) => theme.text};
  font-size: 1.2rem;
`

export const MenuItem = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s, text-decoration 0.3s;
  color: ${({ theme }) => theme.menuText};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.text};
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`

export const Hash = styled.span`
  color: #c778dd;
  margin-right: 2px;
  font-size: 15px;
  display: inline-block;
  line-height: 1;
  vertical-align: middle;
`
export const ThemeToggle = styled.div`
  cursor: pointer;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.accent};

  &:hover {
    opacity: 0.8;
  }
`
// ------------------------------------Menu----------------------------------------
