import React, { useEffect, useState } from 'react'
import {
  DashboardWrapper,
  DashboardTitle,
  DashboardContent,
  Section,
  SectionHeader,
  EditButton,
} from './dashboard.style'

import settingApi from '../../services/setting.api'
import projectApi from '../../services/project.api'

const Dashboard = () => {
  const [setting, setSetting] = useState(null)
  const [projectCount, setProjectCount] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const settingData = await settingApi.getSetting()
        setSetting(settingData)

        const countData = await projectApi.countProjects()
        setProjectCount(countData.total || 0)
      } catch (error) {
        console.error('Lỗi lấy dữ liệu Dashboard:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <DashboardWrapper>
      <DashboardTitle>Dashboard</DashboardTitle>

      <DashboardContent>
        {setting ? (
          <>
            <Section>
              <SectionHeader>
                <h3>📝 Giới thiệu (About Me)</h3>
                <EditButton>Chỉnh sửa</EditButton>
              </SectionHeader>
              <p>{setting.aboutMe}</p>
            </Section>

            <Section>
              <SectionHeader>
                <h3>📞 Thông tin liên hệ</h3>
                <EditButton>Chỉnh sửa</EditButton>
              </SectionHeader>
              <ul>
                <li>
                  <strong>Email:</strong>{' '}
                  {setting.contactInfo?.email || 'Chưa có'}
                </li>
                <li>
                  <strong>Phone:</strong>{' '}
                  {setting.contactInfo?.phone || 'Chưa có'}
                </li>
                <li>
                  <strong>Zalo:</strong>{' '}
                  {setting.contactInfo?.zalo || 'Chưa có'}
                </li>
                <li>
                  <strong>Facebook:</strong>{' '}
                  {setting.contactInfo?.facebook || 'Chưa có'}
                </li>
                <li>
                  <strong>Github:</strong>{' '}
                  {setting.contactInfo?.github || 'Chưa có'}
                </li>
              </ul>
            </Section>

            <Section>
              <SectionHeader>
                <h3>📊 Thống kê</h3>
              </SectionHeader>
              <ul>
                <li>
                  <strong>Lượt xem trang:</strong>{' '}
                  {setting.analytics?.views || 0}
                </li>
                <li>
                  <strong>Lượt xem project:</strong>{' '}
                  {setting.analytics?.projectsViewed || 0}
                </li>
                <li>
                  <strong>Tổng số project:</strong> {projectCount}
                </li>
              </ul>
            </Section>
          </>
        ) : (
          <p>Đang tải dữ liệu...</p>
        )}
      </DashboardContent>
    </DashboardWrapper>
  )
}

export default Dashboard
