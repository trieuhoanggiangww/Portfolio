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
    const formData = new FormData()

    // Append text fields
    formData.append('title', projectData.title)
    formData.append('desc', projectData.desc)
    formData.append('content', projectData.content)
    formData.append('tech', projectData.tech)
    formData.append('projectType', projectData.projectType)
    if (projectData.livelink) formData.append('livelink', projectData.livelink)
    if (projectData.repolink) formData.append('repolink', projectData.repolink)
    if (projectData.startDate)
      formData.append('startDate', projectData.startDate)
    if (projectData.endDate) formData.append('endDate', projectData.endDate)

    // Append image (file object)
    formData.append('image', projectData.image)

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
