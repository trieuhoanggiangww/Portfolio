const jwt = require('jsonwebtoken')

const authAdminMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res
      .status(401)
      .json({ success: false, message: 'Không có token, truy cập bị từ chối' })
  }

  const token = authHeader.split(' ')[1]

  try {
    const decoded = jwt.verify(
      token,
      'acxnmxncoajscojkoc2io1jdpkmp12pascmcnklcn13213216515@@!!@@$@##%#@#sdadasdasdasd'
    )
    req.admin = decoded
    next()
  } catch (error) {
    console.error('Lỗi xác thực token:', error.message)
    return res
      .status(401)
      .json({ success: false, message: 'Token không hợp lệ' })
  }
}

module.exports = authAdminMiddleware
