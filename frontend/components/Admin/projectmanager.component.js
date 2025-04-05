import React, { useState, useEffect } from 'react'
import {
  ProjectManaWrapper,
  ProjectManaHeader,
  ProjectManaAddButton,
  ProjectManaForm,
  ProjectManaFormGroup,
  ProjectManaFormButtonGroup,
  ProjectManaSaveButton,
  ProjectManaCancelButton,
  ProjectManaImagePreview,
} from './projectmanager.style'

import { ProjectListWrapper } from '../../screens/Project/project.style' // giữ layout

import {
  Card,
  Preview,
  Stack,
  Title,
  Description,
  ButtonGroup,
  Button,
} from '../../screens/Project/projectcard.style' // bộ card UI mới

import projectApi from '../../services/project.api'
import { BASE_URL } from '../../services/api'
import { DashboardTitle } from './dashboard.style'

const ProjectManager = () => {
  const [projects, setProjects] = useState([])
  const [isAdding, setIsAdding] = useState(false)
  const [editingProject, setEditingProject] = useState(null)

  const [formData, setFormData] = useState({
    title: '',
    desc: '',
    content: '',
    tech: '',
    image: null,
    livelink: '',
    repolink: '',
    startDate: '',
    endDate: '',
  })
  const [preview, setPreview] = useState('')

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    const res = await projectApi.getAllProjects()
    setProjects(res)
  }

  const handleAddNew = () => {
    setFormData({
      title: '',
      desc: '',
      content: '',
      tech: '',
      image: null,
      livelink: '',
      repolink: '',
      startDate: '',
      endDate: '',
    })
    setPreview('')
    setEditingProject(null)
    setIsAdding(true)
  }

  const handleEdit = (proj) => {
    setFormData({
      title: proj.title || '',
      desc: proj.desc || '',
      content: proj.content || '',
      tech: proj.tech || '',
      image: null,
      livelink: proj.livelink || '',
      repolink: proj.repolink || '',
      startDate: proj.startDate ? proj.startDate.slice(0, 10) : '',
      endDate: proj.endDate ? proj.endDate.slice(0, 10) : '',
    })
    setPreview(proj.image ? `${BASE_URL}${proj.image}` : '')
    setEditingProject(proj)
    setIsAdding(true)
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData({ ...formData, image: file })
      setPreview(URL.createObjectURL(file))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const form = new FormData()
    const original = editingProject || {}

    Object.entries(formData).forEach(([key, value]) => {
      if (key === 'image') return
      const newVal = typeof value === 'string' ? value.trim() : value
      const oldVal = original[key] ?? ''
      if (newVal && newVal !== oldVal) {
        form.append(key, newVal)
      }
    })

    if (formData.image && typeof formData.image !== 'string') {
      form.append('image', formData.image)
    }

    if (editingProject) {
      await projectApi.updateProject(editingProject._id, form)
    } else {
      await projectApi.createProject(form)
    }

    fetchProjects()
    setIsAdding(false)
    setEditingProject(null)
  }

  const handleDelete = async (id) => {
    if (window.confirm('Xóa project này?')) {
      await projectApi.deleteProject(id)
      fetchProjects()
    }
  }

  return (
    <ProjectManaWrapper>
      <ProjectManaHeader>
        <DashboardTitle>Project Manager</DashboardTitle>
        {!isAdding && (
          <ProjectManaAddButton onClick={handleAddNew}>
            ➕ Thêm mới
          </ProjectManaAddButton>
        )}
      </ProjectManaHeader>

      {isAdding && (
        <ProjectManaForm onSubmit={handleSubmit}>
          {[
            { key: 'title', label: 'Tiêu đề' },
            { key: 'desc', label: 'Mô tả ngắn' },
            { key: 'content', label: 'Nội dung chi tiết' },
            { key: 'tech', label: 'Công nghệ sử dụng' },
            { key: 'livelink', label: 'Link sản phẩm' },
            { key: 'repolink', label: 'Link mã nguồn' },
            { key: 'startDate', label: 'Ngày bắt đầu' },
            { key: 'endDate', label: 'Ngày kết thúc' },
          ].map(({ key, label }) => (
            <ProjectManaFormGroup key={key}>
              <label>{label}:</label>
              <input
                type={key.includes('Date') ? 'date' : 'text'}
                value={formData[key] || ''}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, [key]: e.target.value }))
                }
              />
            </ProjectManaFormGroup>
          ))}

          <ProjectManaFormGroup>
            <label>Ảnh minh họa:</label>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            {preview && <ProjectManaImagePreview src={preview} alt="Preview" />}
          </ProjectManaFormGroup>

          <ProjectManaFormButtonGroup>
            <ProjectManaSaveButton type="submit">Lưu</ProjectManaSaveButton>
            <ProjectManaCancelButton
              type="button"
              onClick={() => setIsAdding(false)}
            >
              Hủy
            </ProjectManaCancelButton>
          </ProjectManaFormButtonGroup>
        </ProjectManaForm>
      )}

      {!isAdding && (
        <ProjectListWrapper>
          {projects.map((proj) => (
            <Card key={proj._id}>
              <Preview src={`${BASE_URL}${proj.image}`} alt={proj.title} />
              <Stack>{proj.tech}</Stack>
              <div style={{ padding: '20px' }}>
                <Title>{proj.title}</Title>
                <Description>{proj.desc}</Description>
                <ButtonGroup>
                  <Button $highlight onClick={() => handleEdit(proj)}>
                    Sửa
                  </Button>
                  <Button onClick={() => handleDelete(proj._id)}>Xóa</Button>
                </ButtonGroup>
              </div>
            </Card>
          ))}
        </ProjectListWrapper>
      )}
    </ProjectManaWrapper>
  )
}

export default ProjectManager
