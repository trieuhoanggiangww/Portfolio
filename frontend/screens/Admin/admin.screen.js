import React from 'react'
import Sidebar from '../../components/Admin/sidebar.component'
import Dashboard from '../../components/Admin/dashboard.component'

const AdminScreen = ({ isDarkMode, toggleTheme }) => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <div style={{ flex: 1 }}>
        <Dashboard />
      </div>
    </div>
  )
}

export default AdminScreen
