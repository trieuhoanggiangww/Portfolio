const {
  createProjectController,
  getAllProjectsController,
  getProjectByIdController,
  countProjectsController,
} = require('../controllers/project.controller')
const express = require('express')
const upload = require('../midleware/uploads.middleware')

const router = express.Router()

router.post('/createProject', upload.single('image'), createProjectController)
router.get('/getAllProject', getAllProjectsController)
router.get('/getProjectById/:id', getProjectByIdController)
router.get('/countProjects', countProjectsController)

module.exports = router
