const express = require('express')
const {
  getSettingController,
  updateAboutMeController,
  updateContactInfoController,
  increaseViewsController,
  increaseProjectsViewedController,
} = require('../controllers/setting.controller')

const router = express.Router()

router.get('/setting', getSettingController)
router.put('/aboutme', updateAboutMeController)
router.put('/contact', updateContactInfoController)
router.post('/view', increaseViewsController)
router.post('/project-view', increaseProjectsViewedController)

module.exports = router
