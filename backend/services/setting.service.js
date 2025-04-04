const Setting = require('../models/setting.model')
const fs = require('fs')
const path = require('path')

// Lấy thông tin Setting
const getSetting = async () => {
  const setting = await Setting.findOne()
  return setting
}

// Cập nhật About Me
const updateAboutMe = async (aboutMeText) => {
  const setting = await Setting.findOneAndUpdate(
    {},
    { aboutMe: aboutMeText },
    { new: true, upsert: true }
  )
  return setting
}

// Cập nhật Contact Info
const updateContactInfo = async (contactInfo) => {
  const setting = await Setting.findOneAndUpdate(
    {},
    { contactInfo: contactInfo },
    { new: true, upsert: true }
  )
  return setting
}

// Tăng lượt views
const increaseViews = async (ipAddress) => {
  let setting = await Setting.findOne()
  if (!setting) {
    setting = new Setting({})
  }
  setting.analytics.views += 1
  await setting.save()

  // Ghi log IP ra file
  const logPath = path.join(__dirname, '../logs/views.json')
  let logs = []

  if (fs.existsSync(logPath)) {
    const data = fs.readFileSync(logPath)
    logs = JSON.parse(data.toString())
  }

  logs.push({
    ip: ipAddress,
    time: new Date().toISOString(),
  })

  fs.writeFileSync(logPath, JSON.stringify(logs, null, 2))
}

// Tăng lượt xem project
const increaseProjectsViewed = async () => {
  let setting = await Setting.findOne()
  if (!setting) {
    setting = new Setting({})
  }
  setting.analytics.projectsViewed += 1
  await setting.save()
}

module.exports = {
  getSetting,
  updateAboutMe,
  updateContactInfo,
  increaseViews,
  increaseProjectsViewed,
}
