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
  createProject: async (projectData) => {
    const response = await api.post('/createProject', projectData)
    return response.data
  },

  // Lấy số lượng project
  countProjects: async () => {
    const response = await api.get('/countProjects')
    return response.data
  },
}
export default projectApi
