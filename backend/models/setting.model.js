const mongoose = require('mongoose')

const settingSchema = new mongoose.Schema(
  {
    aboutMe: {
      type: String,
      required: true,
    },
    contactInfo: {
      email: { type: String },
      phone: { type: String },
      zalo: { type: String },
      facebook: { type: String },
      github: { type: String },
    },
    analytics: {
      views: { type: Number, default: 0 },
      projectsViewed: { type: Number, default: 0 },
    },
  },
  { timestamps: true }
)

const Setting = mongoose.model('Setting', settingSchema)

module.exports = Setting
