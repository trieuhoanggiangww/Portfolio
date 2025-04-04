const {
  createProjectController,
  getAllProjectsController,
  getProjectByIdController,
  countProjectsController,
} = require('../controllers/project.controller')
const express = require('express')

const router = express.Router()

router.post('/createProject', createProjectController)
router.get('/getAllProject', getAllProjectsController)
router.get('/getProjectById/:id', getProjectByIdController)
router.get('/countProjects', countProjectsController)

module.exports = router
