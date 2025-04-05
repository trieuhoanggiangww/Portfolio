const {
  createProject,
  getAllProjects,
  getProjectById,
  countProjects,
  updateProject,
  deleteProject,
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

const updateProjectController = async (req, res) => {
  try {
    const { id } = req.params

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

    let updatedData = {
      title,
      desc,
      content,
      tech,
      livelink,
      repolink,
      startDate,
      endDate,
    }

    // Giữ ảnh cũ nếu không có file mới
    if (req.file) {
      updatedData.image = `/uploads/${req.file.filename}`
    } else if (req.body.image) {
      updatedData.image = req.body.image
    }

    // Lọc bỏ các trường có giá trị undefined
    Object.keys(updatedData).forEach((key) => {
      if (updatedData[key] === undefined) {
        delete updatedData[key]
      }
    })

    const updated = await updateProject(id, updatedData)

    if (!updated) {
      return res.status(404).json({ message: 'Không tìm thấy project' })
    }

    res.json({ message: 'Cập nhật thành công', project: updated })
  } catch (error) {
    console.error('Lỗi cập nhật project:', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

const deleteProjectController = async (req, res) => {
  try {
    const deleted = await deleteProject(req.params.id)

    if (!deleted) {
      return res.status(404).json({ message: 'Không tìm thấy project' })
    }

    res.json({ message: 'Xóa project thành công' })
  } catch (error) {
    console.error('Lỗi xóa project:', error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}
module.exports = {
  createProjectController,
  getAllProjectsController,
  getProjectByIdController,
  countProjectsController,
  updateProjectController,
  deleteProjectController,
}
