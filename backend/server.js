const app = require('./app')
const mongoose = require('mongoose')

const PORT = 5000
const MONGO_URI =
  'mongodb://giang:123123@localhost:27017/portfolio?authSource=admin'

// Kết nối Mongo rồi mới chạy server
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Kết nối MongoDB thành công!')

    app.listen(PORT, () => {
      console.log(`Server chạy tại cổng ${PORT}`)
    })
  })
  .catch((error) => {
    console.error('Kết nối MongoDB thất bại:', error.message)
    process.exit(1)
  })
