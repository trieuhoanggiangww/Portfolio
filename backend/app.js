const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

// Middleware
app.use(express.json())
app.use(cors())

// Thiết lập các file tĩnh cho frontend
app.use(express.static(path.join(__dirname, '../dist')))

// Route tất cả các yêu cầu khác tới index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'))
})

module.exports = app
