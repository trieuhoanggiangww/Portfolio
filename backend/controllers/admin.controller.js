const { loginAdmin, createAdmin } = require('../services/admin.service')

// Đăng nhập admin
const loginAdminController = async (req, res) => {
  try {
    const { username, password } = req.body

    const { token } = await loginAdmin(username, password)

    res.status(200).json({
      success: true,
      message: 'Đăng nhập thành công',
      token,
    })
  } catch (error) {
    console.error('Message:', error.message)

    res.status(401).json({
      success: false,
      message: error.message || 'Đăng nhập thất bại',
    })
  }
}

// Tạo mới admin
const createAdminController = async (req, res) => {
  try {
    const { username, password } = req.body
    const newAdmin = await createAdmin({ username, password })

    res.status(201).json({
      success: true,
      message: 'Tạo admin thành công',
      admin: {
        id: newAdmin._id,
        username: newAdmin.username,
        createdAt: newAdmin.createdAt,
      },
    })
  } catch (error) {
    console.error('Lỗi tạo admin:', error.message)
    res.status(500).json({
      success: false,
      message: error.message || 'Lỗi server',
    })
  }
}

module.exports = {
  loginAdminController,
  createAdminController,
}
