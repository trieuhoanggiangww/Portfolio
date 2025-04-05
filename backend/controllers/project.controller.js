const {
  createProject,
  getAllProjects,
  getProjectById,
  countProjects,
} = require('../services/project.service')

const createProjectController = async (req, res) => {
  try {
    const {
      title,
      desc,
      content,
      tech,
      livelink,
      repolink,
      startDate,
      endDate,
    } = req.body

    const image = req.file ? `/uploads/${req.file.filename}` : ''

    const newProject = await createProject({
      title,
      desc,
      content,
      tech,
      image,
      livelink,
      repolink,
      startDate,
      endDate,
    })

    res.status(201).json(newProject)
  } catch (error) {
    console.error('Lỗi tạo project:', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

const getAllProjectsController = async (req, res) => {
  try {
    const projects = await getAllProjects()
    res.status(200).json(projects)
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

const getProjectByIdController = async (req, res) => {
  try {
    const project = await getProjectById(req.params.id)
    if (!project) {
      return res.status(404).json({ message: 'Project not found' })
    }
    res.status(200).json(project)
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

const countProjectsController = async (req, res) => {
  try {
    const count = await countProjects()
    res.json({ total: count })
  } catch (error) {
    console.error('Lỗi đếm project:', error.message)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}
module.exports = {
  createProjectController,
  getAllProjectsController,
  getProjectByIdController,
  countProjectsController,
}
