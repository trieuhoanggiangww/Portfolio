import React, { useState, useEffect } from 'react'
import sanitizeHtml from 'sanitize-html'

import {
  ProjectManaWrapper,
  ProjectManaHeader,
  ProjectManaAddButton,
  ProjectManaForm,
  ProjectManaFormGroup,
  ProjectManaImagePreview,
  ProjectManaAddButtonMobile,
} from './projectmanager.style'

import { ProjectListWrapper } from '../../screens/Project/project.style'

import {
  Card,
  Preview,
  Stack,
  Title,
  Description,
  ButtonGroup,
  Button,
} from '../Project/projectcard.style'

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
    projectType: 'minor', // ✅ default type
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
      projectType: 'minor',
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
      projectType: proj.projectType || 'minor',
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

  const handleInput = (e) => {
    const rawContent = e.target.innerHTML
    const sanitizedContent = sanitizeHtml(rawContent, {
      allowedTags: [
        'b',
        'i',
        'em',
        'strong',
        'a',
        'img',
        'p',
        'ul',
        'ol',
        'li',
      ],
      allowedAttributes: {
        a: ['href', 'target'],
        img: ['src', 'alt'],
      },
    })
    setFormData((prev) => ({ ...prev, content: sanitizedContent }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.image && !editingProject) {
      alert('Vui lòng chọn ảnh minh họa!')
      return
    }

    const form = new FormData()
    const original = editingProject || {}

    Object.entries(formData).forEach(([key, value]) => {
      if (key === 'image') return
      const newVal = typeof value === 'string' ? value.trim() : value
      const oldVal = original[key] ?? ''
      if (newVal !== oldVal) {
        form.append(key, newVal)
      }
    })

    if (formData.image && typeof formData.image !== 'string') {
      form.append('image', formData.image)
    }

    try {
      if (editingProject) {
        await projectApi.updateProject(editingProject._id, form)
      } else {
        await projectApi.createProject(form)
      }

      fetchProjects()
      setIsAdding(false)
      setEditingProject(null)
    } catch (error) {
      console.error('Lỗi submit project:', error)
    }
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
          {/* Input thường */}
          {[
            { key: 'title', label: 'Tiêu đề' },
            { key: 'desc', label: 'Mô tả ngắn' },
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

          {/* projectType chọn từ dropdown */}
          <ProjectManaFormGroup>
            <label>Loại dự án:</label>
            <select
              value={formData.projectType}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  projectType: e.target.value,
                }))
              }
            >
              <option value="major">Dự án lớn</option>
              <option value="minor">Dự án nhỏ</option>
              <option value="exercise">Bài tập</option>
            </select>
          </ProjectManaFormGroup>

          {/* Nội dung mô tả HTML */}
          <ProjectManaFormGroup>
            <label>Nội dung chi tiết:</label>
            <div
              contentEditable
              onInput={handleInput}
              dangerouslySetInnerHTML={{ __html: formData.content }}
              style={{
                border: '1px solid #ccc',
                padding: '10px',
                minHeight: '200px',
                overflowY: 'auto',
              }}
            />
          </ProjectManaFormGroup>

          {/* Hình ảnh */}
          <ProjectManaFormGroup>
            <label>Ảnh minh họa:</label>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            {preview && <ProjectManaImagePreview src={preview} alt="Preview" />}
          </ProjectManaFormGroup>

          <Button type="submit" $highlight>
            {editingProject ? 'Cập nhật' : 'Lưu'}
          </Button>
          <Button
            type="button"
            onClick={() => {
              setIsAdding(false)
              setEditingProject(null)
            }}
          >
            {editingProject ? 'Huỷ chỉnh sửa' : 'Huỷ'}
          </Button>
        </ProjectManaForm>
      )}

      {!isAdding && (
        <ProjectListWrapper>
          {projects.map((proj) => (
            <Card key={proj._id}>
              <Preview src={`${BASE_URL}${proj.image}`} alt={proj.title} />
              <Stack>
                {proj.tech}
                <br />{' '}
                {proj.projectType === 'major'
                  ? 'Dự án lớn'
                  : proj.projectType === 'exercise'
                  ? 'Bài tập'
                  : 'Dự án nhỏ'}
              </Stack>
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

      <ProjectManaAddButtonMobile onClick={handleAddNew}>
        ➕ Thêm mới
      </ProjectManaAddButtonMobile>
    </ProjectManaWrapper>
  )
}

export default ProjectManager
