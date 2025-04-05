// File: projectmanager.component.js
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
    console.log(res)
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
    Object.keys(formData).forEach((key) => {
      if (formData[key]) form.append(key, formData[key])
    })

    // Nếu đang sửa và không chọn ảnh mới thì giữ ảnh cũ
    if (!formData.image && editingProject?.image) {
      form.append('image', editingProject.image)
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
        <h2>Quản lý Project</h2>
        {!isAdding && <AddButton onClick={handleAddNew}>➕ Thêm mới</AddButton>}
      </Header>

      {isAdding && (
        <Form onSubmit={handleSubmit}>
          {[
            'title',
            'desc',
            'content',
            'tech',
            'livelink',
            'repolink',
            'startDate',
            'endDate',
          ].map((field) => (
            <FormGroup key={field}>
              <label>{field}:</label>
              <input
                type={field.includes('Date') ? 'date' : 'text'}
                value={formData[field] || ''} // tránh undefined/null
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, [field]: e.target.value }))
                }
              />
            </FormGroup>
          ))}

          <FormGroup>
            <label>image:</label>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            {preview && (
              <div>
                <p>Preview:</p>
                <img src={preview} alt="Preview" style={{ width: 100 }} />
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
