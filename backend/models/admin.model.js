const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 4,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const Admin = mongoose.model('Admin', adminSchema)

module.exports = Admin
