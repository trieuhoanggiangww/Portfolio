const express = require('express')
const cors = require('cors')
const path = require('path')
const projectRouter = require('./routes/project.router')
const adminRouter = require('./routes/admin.router')
const settingRouter = require('./routes/setting.router')
const app = express()

// Middleware
app.use(express.json())
app.use(
  cors({
    origin: [
      'http://localhost:8080',
      'http://trieuhoanggiang.click',
      'https://trieuhoanggiang.click',
    ],
    credentials: true,
  })
)

app.use('/api', projectRouter)
app.use('/api', settingRouter)
app.use('/api', adminRouter)

// Cho phép truy cập tĩnh thư mục uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

// Thiết lập các file tĩnh cho frontend
app.use(express.static(path.join(__dirname, '../build')))

// Route tất cả các yêu cầu khác tới index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'))
})

module.exports = app
