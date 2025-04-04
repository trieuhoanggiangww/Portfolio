import api from './api'

export const loginAdmin = async (adminData) => {
  return await api.post('/loginAdmin', adminData)
}
