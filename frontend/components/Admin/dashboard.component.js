import React, { useEffect, useState } from 'react'
import {
  DashboardWrapper,
  DashboardTitle,
  DashboardContent,
  Section,
  SectionHeader,
  EditButton,
  StatSection,
  StatBox,
  IconWrapper,
  AboutTextarea,
  SaveButton,
} from './dashboard.style'

import { FaEye, FaFolderOpen, FaStar } from 'react-icons/fa'

import settingApi from '../../services/setting.api'
import projectApi from '../../services/project.api'

const Dashboard = () => {
  const [setting, setSetting] = useState(null)
  const [projectCount, setProjectCount] = useState(0)
  const [aboutMeInput, setAboutMeInput] = useState('')
  const [isEditingContact, setIsEditingContact] = useState(false)
  const [contactForm, setContactForm] = useState({
    email: '',
    phone: '',
    zalo: '',
    facebook: '',
    github: '',
  })

  // Fetch setting + project count
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [settingData, countData] = await Promise.all([
          settingApi.getSetting(),
          projectApi.countProjects(),
        ])
        setSetting(settingData)
        setAboutMeInput(settingData.aboutMe || '')
        setContactForm(settingData.contactInfo || {})
        setProjectCount(countData.total || 0)
      } catch (error) {
        console.error('Lỗi lấy dữ liệu Dashboard:', error)
      }
    }
    fetchData()
  }, [])

  // Cập nhật About Me
  const handleUpdateAboutMe = async () => {
    try {
      await settingApi.updateAboutMe(aboutMeInput)
      alert('Cập nhật About Me thành công!')
    } catch (error) {
      console.error('Lỗi cập nhật About Me:', error)
      alert('Cập nhật thất bại.')
    }
  }

  // Cập nhật Contact Info
  const handleUpdateContact = async (e) => {
    e.preventDefault()
    try {
      await settingApi.updateContactInfo(contactForm)
      alert('Cập nhật Thông tin liên hệ thành công!')
      setIsEditingContact(false)

      const updated = await settingApi.getSetting()
      setSetting(updated)
    } catch (error) {
      console.error('Lỗi cập nhật thông tin liên hệ:', error)
      alert('Cập nhật thất bại!')
    }
  }

  // Xử lý thay đổi input contact
  const handleInputChange = (field, value) => {
    setContactForm((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <DashboardWrapper>
      <DashboardTitle>Dashboard</DashboardTitle>

      <DashboardContent>
        {setting ? (
          <>
            {/* --- Thống kê --- */}
            <StatSection>
              <StatBox>
                <IconWrapper>
                  <FaEye />
                </IconWrapper>
                <h4>Lượt xem trang</h4>
                <p>{setting.analytics?.views || 0}</p>
              </StatBox>

              <StatBox>
                <IconWrapper>
                  <FaFolderOpen />
                </IconWrapper>
                <h4>Lượt xem project</h4>
                <p>{setting.analytics?.projectsViewed || 0}</p>
              </StatBox>

              <StatBox>
                <IconWrapper>
                  <FaStar />
                </IconWrapper>
                <h4>Tổng số project</h4>
                <p>{projectCount}</p>
              </StatBox>
            </StatSection>

            {/* --- About Me --- */}
            <Section>
              <SectionHeader>
                <h3>📝 Giới thiệu (About Me)</h3>
              </SectionHeader>
              <AboutTextarea
                value={aboutMeInput}
                onChange={(e) => setAboutMeInput(e.target.value)}
                placeholder="Nhập nội dung giới thiệu..."
              />
              <SaveButton onClick={handleUpdateAboutMe}>Cập nhật</SaveButton>
            </Section>

            {/* --- Thông tin liên hệ --- */}
            <Section>
              <SectionHeader>
                <h3>📞 Thông tin liên hệ</h3>
                <EditButton
                  onClick={() => setIsEditingContact((prev) => !prev)}
                >
                  {isEditingContact ? 'Huỷ' : 'Chỉnh sửa'}
                </EditButton>
              </SectionHeader>

              {isEditingContact ? (
                <form onSubmit={handleUpdateContact}>
                  {['email', 'phone', 'zalo', 'facebook', 'github'].map(
                    (field) => (
                      <div
                        key={field}
                        className="form-group"
                        style={{
                          marginBottom: '12px',
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                      >
                        <label style={{ marginBottom: '4px' }}>
                          {field.charAt(0).toUpperCase() + field.slice(1)}:
                        </label>
                        <input
                          type="text"
                          value={contactForm[field] || ''}
                          onChange={(e) =>
                            handleInputChange(field, e.target.value)
                          }
                          style={{
                            padding: '8px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                          }}
                        />
                      </div>
                    )
                  )}
                  <SaveButton type="submit">Cập nhật</SaveButton>
                </form>
              ) : (
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
              )}
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
