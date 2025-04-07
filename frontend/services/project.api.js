import api from './api'

const projectApi = {
  // Lấy tất cả project
  getAllProjects: async () => {
    const response = await api.get('/getAllProject')
    return response.data
  },

  // Lấy project theo ID
  getProjectById: async (id) => {
    const response = await api.get(`/getProjectById/${id}`)
    return response.data
  },

  // Tạo mới một project
  createProject: async (formData) => {
    const response = await api.post('/createProject', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    return response.data
  },

  // Lấy số lượng project
  countProjects: async () => {
    const response = await api.get('/countProjects')
    return response.data
  },

  updateProject: async (id, formData) => {
    const response = await api.put(`/updateProject/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    return response.data
  },

  // Xóa project
  deleteProject: async (id) => {
    const response = await api.delete(`/deleteProject/${id}`)
    return response.data
  },
}
export default projectApi
