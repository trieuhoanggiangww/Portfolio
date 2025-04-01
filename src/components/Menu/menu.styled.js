import styled from 'styled-components'

export const MenuBar = styled.nav`
  background-color: #2a2a2a;
  padding: 0 32px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  height: 60px;
  width: 900px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;

  opacity: ${({ $sticky }) => ($sticky ? 0.3 : 1)};
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`

export const MenuItems = styled.ul`
  list-style: none;
  display: flex;
  gap: 250px;
  margin: 0;
  padding: 0;
`

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 16px;
  font-weight: 600;
  color: white;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #f0a500;
  }
`
