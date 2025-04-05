const multer = require('multer')
const path = require('path')
const fs = require('fs')

// Tạo thư mục uploads nếu chưa tồn tại
const uploadDir = path.join(__dirname, '../uploads')
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir)
}

// Cấu hình lưu ảnh
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir)
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname
    cb(null, uniqueName)
  },
})

// Filter chỉ cho phép file ảnh
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif/
  const extname = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
  )
  const mimetype = allowedTypes.test(file.mimetype)

  if (extname && mimetype) {
    cb(null, true)
  } else {
    cb(new Error('Chỉ cho phép upload ảnh (jpg, jpeg, png, gif)'))
  }
}

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // Giới hạn 5MB
})

module.exports = upload
