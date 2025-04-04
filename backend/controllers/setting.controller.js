const {
  getSetting,
  updateAboutMe,
  updateContactInfo,
  increaseViews,
  increaseProjectsViewed,
} = require('../services/setting.service')

// Lấy Setting
const getSettingController = async function (req, res) {
  try {
    const setting = await getSetting()
    res.json(setting)
  } catch (error) {
    console.error('Lỗi lấy Setting:', error)
    res.status(500).json({ message: 'Server error' })
  }
}

// Cập nhật About Me
const updateAboutMeController = async function (req, res) {
  try {
    const aboutMeText = req.body.aboutMe
    const setting = await updateAboutMe(aboutMeText)
    res.json(setting)
  } catch (error) {
    console.error('Lỗi cập nhật About Me:', error)
    res.status(500).json({ message: 'Server error' })
  }
}

// Cập nhật Contact Info
const updateContactInfoController = async function (req, res) {
  try {
    const contactInfo = req.body.contactInfo
    const setting = await updateContactInfo(contactInfo)
    res.json(setting)
  } catch (error) {
    console.error('Lỗi cập nhật Contact Info:', error)
    res.status(500).json({ message: 'Server error' })
  }
}

// Ghi nhận lượt xem Portfolio
const increaseViewsController = async function (req, res) {
  try {
    const ipAddress =
      req.headers['x-forwarded-for'] ||
      req.connection.remoteAddress ||
      'unknown'

    await increaseViews(ipAddress)
    res.json({ message: 'Đã ghi nhận lượt xem' })
  } catch (error) {
    console.error('Lỗi ghi nhận lượt xem:', error)
    res.status(500).json({ message: 'Server error' })
  }
}

// Ghi nhận lượt xem Project
const increaseProjectsViewedController = async function (req, res) {
  try {
    await increaseProjectsViewed()
    res.json({ message: 'Đã ghi nhận lượt xem Project' })
  } catch (error) {
    console.error('Lỗi ghi nhận lượt xem Project:', error)
    res.status(500).json({ message: 'Server error' })
  }
}

module.exports = {
  getSettingController,
  updateAboutMeController,
  updateContactInfoController,
  increaseViewsController,
  increaseProjectsViewedController,
}
