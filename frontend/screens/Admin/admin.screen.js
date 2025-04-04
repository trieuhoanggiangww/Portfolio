import React from 'react'
import Sidebar from '../../components/Admin/sidebar.component'

const AdminScreen = ({ isDarkMode, toggleTheme }) => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      {/* Phần content admin ở đây */}
    </div>
  )
}

export default AdminScreen
