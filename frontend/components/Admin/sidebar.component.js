import React, { useState } from 'react'
import styled from 'styled-components'
import { loginAdmin } from '../../services/admin.api'

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.background};
`

const LoginFormContainer = styled.form`
  background: ${({ theme }) => theme.cardBackground || '#282c34'};
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 300px;
`

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: ${({ theme }) => theme.inputBackground || '#fff'};
  color: ${({ theme }) => theme.text};
  font-size: 16px;
`

const Button = styled.button`
  padding: 12px;
  border: none;
  background-color: #c778dd;
  color: white;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #b266cc;
  }
`

const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  text-align: center;
`

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('') // clear lỗi cũ

    try {
      const token = await loginAdmin(username, password)
      console.log('Login thành công, token:', token)
      // Lưu token vào localStorage để quản lý session
      localStorage.setItem('adminToken', token)
      // Chuyển trang sau khi login (ví dụ về dashboard)
      window.location.href = '/admin/dashboard'
    } catch (err) {
      console.error('Lỗi login:', err)
      setError(err.response?.data?.message || 'Đăng nhập thất bại')
    }
  }

  return (
    <LoginWrapper>
      <LoginFormContainer onSubmit={handleSubmit}>
        <h2 style={{ textAlign: 'center', color: '#c778dd' }}>Admin Login</h2>

        <Input
          type="text"
          placeholder="Tên đăng nhập"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit">Đăng nhập</Button>

        {error && <ErrorMessage>{error}</ErrorMessage>}
      </LoginFormContainer>
    </LoginWrapper>
  )
}

export default LoginForm
