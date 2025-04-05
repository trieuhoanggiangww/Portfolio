import React, { useState, useEffect } from 'react'
import sanitizeHtml from 'sanitize-html' // Import thư viện sanitize-html

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
} from '../../screens/Project/projectcard.style'

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
    content: '', // Sử dụng content để lưu trữ HTML
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

  // Sử dụng handleInput để cập nhật nội dung trong contenteditable và làm sạch HTML
  const handleInput = (e) => {
    const rawContent = e.target.innerHTML

    // Làm sạch HTML để loại bỏ CSS không mong muốn
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
      ], // Cho phép các thẻ cơ bản như <img> và các thẻ văn bản
      allowedAttributes: {
        a: ['href', 'target'], // Cho phép các thuộc tính của thẻ <a>
        img: ['src', 'alt'], // Cho phép các thuộc tính của thẻ <img>
      },
    })

    setFormData((prev) => ({
      ...prev,
      content: sanitizedContent, // Lưu trữ nội dung đã được làm sạch
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const form = new FormData()
    const original = editingProject || {}

    // Lặp qua các trường trong formData để thêm vào form
    Object.entries(formData).forEach(([key, value]) => {
      if (key === 'image') return
      const newVal = typeof value === 'string' ? value.trim() : value
      const oldVal = original[key] ?? ''
      if (newVal && newVal !== oldVal) {
        form.append(key, newVal)
      }
    })

    // Nếu có ảnh minh họa, thêm vào form
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

          {/* Sử dụng contenteditable cho nội dung */}
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
      <ProjectManaAddButtonMobile onClick={handleAddNew}>
        ➕ Thêm mới
      </ProjectManaAddButtonMobile>
    </ProjectManaWrapper>
  )
}

export default ProjectManager
