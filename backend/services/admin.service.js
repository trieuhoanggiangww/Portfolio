const Admin = require('../models/admin.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// NÊN đưa secret này vào .env để bảo mật
const JWT_SECRET =
  'acxnmxncoajscojkoc2io1jdpkmp12pascmcnklcn13213216515@@!!@@$@##%#@#sdadasdasdasd'

const createAdmin = async (adminData) => {
  const { username, password } = adminData

  // Check xem username đã tồn tại chưa
  const existingAdmin = await Admin.findOne({ username })
  if (existingAdmin) {
    throw new Error('Tên đăng nhập đã tồn tại')
  }

  // Hash mật khẩu
  const hashedPassword = await bcrypt.hash(password, 10)

  const newAdmin = new Admin({
    username,
    password: hashedPassword,
  })

  return await newAdmin.save()
}

const loginAdmin = async (username, password) => {
  const admin = await Admin.findOne({ username })
  if (!admin) {
    throw new Error('Tên đăng nhập không tồn tại')
  }

  const isMatch = await bcrypt.compare(password, admin.password)
  if (!isMatch) {
    throw new Error('Sai mật khẩu')
  }

  // Tạo token (thường nên lưu thêm username/id vào payload)
  const token = jwt.sign(
    { id: admin._id, username: admin.username },
    JWT_SECRET,
    { expiresIn: '1d' }
  )

  return { token }
}

module.exports = {
  createAdmin,
  loginAdmin,
}
