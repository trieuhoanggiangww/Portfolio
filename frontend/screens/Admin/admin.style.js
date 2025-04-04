import styled from 'styled-components'

export const AdminContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background};
`

export const AdminContent = styled.div`
  margin-left: 260px; /* đẩy content sang bên phải bằng đúng độ rộng sidebar */
  padding: 30px;
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    margin-left: 0; /* Nếu mobile thì bỏ margin */
    padding: 20px;
  }
`
