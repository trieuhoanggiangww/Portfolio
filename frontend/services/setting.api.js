import api from './api'

const settingApi = {
  getSetting: async () => {
    const response = await api.get('/setting')
    return response.data
  },

  updateAboutMe: async (aboutMe) => {
    const response = await api.put('/aboutme', { aboutMe })
    return response.data
  },

  updateContactInfo: async (contactInfo) => {
    const response = await api.put('/contact', { contactInfo })
    return response.data
  },

  increaseViews: async () => {
    const response = await api.post('/view')
    return response.data
  },

  increaseProjectsViewed: async () => {
    const response = await api.post('/project-view')
    return response.data
  },
}

export default settingApi
