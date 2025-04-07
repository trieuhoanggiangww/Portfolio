import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginAdmin } from '../../services/admin.api'
import {
  LoginWrapper,
  LoginForm,
  Title,
  Input,
  Button,
  ErrorText,
} from './login.style'

const LoginScreen = ({ setIsAuthenticated }) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ username: '', password: '' })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      const res = await loginAdmin(formData)

      if (res.data && res.data.success) {
        localStorage.setItem('adminToken', res.data.token)
        localStorage.setItem('adminUsername', formData.username)
        setIsAuthenticated(true)
        navigate('/admin')
      } else {
        setError('Đăng nhập thất bại. Vui lòng kiểm tra lại.')
      }
    } catch (err) {
      console.error('Lỗi:', err)
      setError('Tài khoản hoặc mật khẩu sai.')
    }
  }

  return (
    <LoginWrapper>
      <LoginForm onSubmit={handleSubmit}>
        <Title>Admin Login</Title>
        <Input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {error && <ErrorText>{error}</ErrorText>}
        <Button type="submit">Login</Button>
      </LoginForm>
    </LoginWrapper>
  )
}

export default LoginScreen
