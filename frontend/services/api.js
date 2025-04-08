import axios from 'axios'

// Định nghĩa URL cơ bản của server
const API_URL = 'http://trieuhoanggiang.click/api'

// Tạo instance axios với cấu hình mặc định
const api = axios.create({
  baseURL: API_URL, // Định nghĩa base URL cho tất cả các request
  withCredentials: true, // Nếu cần sử dụng cookie trong các request
})

export const BASE_URL = 'http://trieuhoanggiang.click'

export default api
