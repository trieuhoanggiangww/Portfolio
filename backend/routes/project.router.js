const {
  createProjectController,
  getAllProjectsController,
  getProjectByIdController,
  countProjectsController,
  updateProjectController,
  deleteProjectController,
} = require('../controllers/project.controller')
const express = require('express')
const upload = require('../midleware/uploads.middleware')

const router = express.Router()

router.post('/createProject', upload.single('image'), createProjectController)
router.get('/getAllProject', getAllProjectsController)
router.get('/getProjectById/:id', getProjectByIdController)
router.get('/countProjects', countProjectsController)
router.put(
  '/updateProject/:id',
  upload.single('image'),
  updateProjectController
)
router.delete('/deleteProject/:id', deleteProjectController)
module.exports = router
