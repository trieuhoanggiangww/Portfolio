import styled from 'styled-components'

// ------------------------------------MenuBar Wrapper----------------------------------------
export const MenuBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 100px;
  background-color: ${({ theme }) => theme.background};
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  @media (max-width: 768px) {
    padding: 20px 16px;
  }
`

// ------------------------------------Logo / Tên----------------------------------------
export const MyName = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-weight: 800;
  color: ${({ theme }) => theme.text};
  font-size: 19px;
`

// ------------------------------------MenuItems (Desktop)----------------------------------------
export const MenuItems = styled.div`
  display: flex;
  gap: 50px;

  @media (max-width: 768px) {
    display: none;
  }
`

// ------------------------------------Từng mục menu----------------------------------------
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

// ------------------------------------Hash (#)----------------------------------------
export const Hash = styled.span`
  color: #c778dd;
  margin-right: 2px;
  font-size: 15px;
  display: inline-block;
  line-height: 1;
  vertical-align: middle;
`

// ------------------------------------Theme Toggle (Sun/Moon)----------------------------------------
export const ThemeToggle = styled.div`
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.accent};
  transition: transform 0.2s;

  &:hover {
    opacity: 0.8;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    font-size: 28px;
    margin-top: 10px;
  }
`
export const ThemeToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
    margin-top: 20px;
  }
`

export const ThemeLabel = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  svg {
    font-size: 20px;
  }
`

export const ThemeSwitch = styled.div`
  width: 50px;
  height: 24px;
  background-color: #2e2e4d;
  border-radius: 50px;
  padding: 3px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`

export const SwitchCircle = styled.div`
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

// ------------------------------------Hamburger Icon (Mobile)----------------------------------------
export const Hamburger = styled.div`
  display: none;
  font-size: 24px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    display: block;
  }
`

// ------------------------------------Mobile Dropdown Menu----------------------------------------
export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 35px 24px;
  z-index: 999;
  transition: transform 0.3s ease;
  transform: ${({ $isOpen }) =>
    $isOpen ? 'translateX(0)' : 'translateX(100%)'};

  @media (min-width: 769px) {
    display: none;
  }
`

export const CloseButton = styled.div`
  position: absolute;
  top: 25px;
  right: 24px;
  font-size: 30px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
`

export const MobileMenuItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 0;
`

export const MobileSocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 20px;

  a {
    color: ${({ theme }) => theme.menuText};
    font-size: 30px;

    &:hover {
      color: ${({ theme }) => theme.text};
    }
  }
`

export const MobileMenuItem = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 25px;
  font-weight: 500;
  line-height: 1;
  padding: 8px 0;
  color: ${({ theme }) => theme.menuText};
  cursor: pointer;
  transition: color 0.2s ease;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.text};
  }

  &.active {
    color: ${({ theme }) => theme.text};
  }
`
