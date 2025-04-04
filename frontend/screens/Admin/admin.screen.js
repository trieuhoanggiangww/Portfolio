import React from 'react'
import Sidebar from '../../components/Admin/sidebar.component'
import Dashboard from '../../components/Admin/dashboard.component'
import { AdminContainer, AdminContent } from './admin.style'

const AdminScreen = ({ isDarkMode, toggleTheme }) => {
  return (
    <AdminContainer>
      <Sidebar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <AdminContent>
        <Dashboard />
      </AdminContent>
    </AdminContainer>
  )
}

export default AdminScreen
