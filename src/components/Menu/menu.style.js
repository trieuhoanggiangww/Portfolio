import styled from 'styled-components'

export const MenuBar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px 200px;
`

export const MenuItems = styled.div`
  display: flex;
  gap: 50px;
`

export const MyName = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-weight: 800;
  color: #fff;
  font-size: 1.2rem;
`

export const MenuItem = styled.div`
  font-family: 'JetBrains Mono', monospace;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s;
  color: gray;

  &:hover {
    color: #fff;
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
