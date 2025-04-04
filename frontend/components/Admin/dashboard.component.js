import React from 'react'
import {
  DashboardWrapper,
  DashboardTitle,
  DashboardContent,
} from './dashboard.style'

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <DashboardTitle>Dashboard</DashboardTitle>

      <DashboardContent>
        {/* Bạn có thể thêm nhiều widget/statistics ở đây sau này */}
        <p>Chào mừng bạn đến trang quản lý 🎯</p>
        <p>
          Bạn có thể theo dõi project, chỉnh sửa nội dung, và cập nhật thông tin
          tại đây.
        </p>
      </DashboardContent>
    </DashboardWrapper>
  )
}

export default Dashboard
