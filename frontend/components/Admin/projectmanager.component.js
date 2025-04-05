import React, { useState, useEffect } from 'react'
import {
  Wrapper,
  Header,
  AddButton,
  Form,
  FormGroup,
  ButtonGroup,
  SaveButton,
  CancelButton,
  Table,
  ActionButton,
  DeleteButton,
  ImagePreview,
} from './projectmanager.style'
import projectApi from '../../services/project.api'
import { BASE_URL } from '../../services/api'
import { DashboardTitle } from './dashboard.style'

const ProjectManager = () => {
  const [projects, setProjects] = useState([])
  const [isAdding, setIsAdding] = useState(false)
  const [editingProject, setEditingProject] = useState(null)
  const [initialData, setInitialData] = useState({})

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
    setInitialData(proj)
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

    // So sánh từng field – chỉ append nếu khác với bản gốc
    Object.entries(formData).forEach(([key, value]) => {
      if (key === 'image') return // ảnh xử lý riêng

      const newVal = typeof value === 'string' ? value.trim() : value
      const oldVal = original[key] ?? ''

      if (newVal && newVal !== oldVal) {
        form.append(key, newVal)
      }
    })

    // Ảnh chỉ thêm nếu là file mới
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
    <Wrapper>
      <Header>
        <DashboardTitle>Project Manager</DashboardTitle>
        {!isAdding && <AddButton onClick={handleAddNew}>➕ Thêm mới</AddButton>}
      </Header>

      {isAdding && (
        <Form onSubmit={handleSubmit}>
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
            <FormGroup key={key}>
              <label>{label}:</label>
              <input
                type={key.includes('Date') ? 'date' : 'text'}
                value={formData[key] || ''}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, [key]: e.target.value }))
                }
              />
            </FormGroup>
          ))}

          <FormGroup>
            <label>Ảnh minh họa:</label>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            {preview && (
              <div>
                <img src={preview} alt="Preview" style={{ width: 300 }} />
              </div>
            )}
          </FormGroup>

          <ButtonGroup>
            <SaveButton type="submit">Lưu</SaveButton>
            <CancelButton type="button" onClick={() => setIsAdding(false)}>
              Hủy
            </CancelButton>
          </ButtonGroup>
        </Form>
      )}

      {!isAdding && (
        <Table>
          <thead>
            <tr>
              <th>Ảnh</th>
              <th>Tiêu đề</th>
              <th>Công nghệ</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((proj) => (
              <tr key={proj._id}>
                <td>
                  {proj.image && (
                    <img
                      src={`${BASE_URL}${proj.image}`}
                      alt={proj.title}
                      style={{
                        width: '80px',
                        height: '60px',
                        objectFit: 'cover',
                        borderRadius: '6px',
                      }}
                    />
                  )}
                </td>

                <td>{proj.title}</td>
                <td>{proj.tech}</td>
                <td>
                  <ActionButton onClick={() => handleEdit(proj)}>
                    Sửa
                  </ActionButton>
                  <DeleteButton onClick={() => handleDelete(proj._id)}>
                    Xóa
                  </DeleteButton>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Wrapper>
  )
}

export default ProjectManager
