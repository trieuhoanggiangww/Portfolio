const express = require('express')
const {
  loginAdminController,
  createAdminController,
} = require('../controllers/admin.controller')
const authAdminMiddleware = require('../midleware/auth.middleware')

const router = express.Router()

router.post('/loginAdmin', loginAdminController)
router.post('/createAdmin', createAdminController, authAdminMiddleware)

module.exports = router
