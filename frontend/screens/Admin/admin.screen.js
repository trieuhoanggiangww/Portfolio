import React from 'react'
import Sidebar from '../../components/Admin/sidebar.component'
import Dashboard from '../../components/Admin/dashboard.component'
import { AdminContainer, AdminContent } from './admin.style'
import { Routes, Route } from 'react-router-dom'

const AdminScreen = ({ isDarkMode, toggleTheme }) => {
  return (
    <AdminContainer>
      <Sidebar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <AdminContent>
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          {/* Sau này thêm các route khác ở đây */}
          <Route path="projects" element={<div>Project Manager</div>} />
          <Route path="logout" element={<div>Đăng xuất</div>} />
        </Routes>
      </AdminContent>
    </AdminContainer>
  )
}

export default AdminScreen
