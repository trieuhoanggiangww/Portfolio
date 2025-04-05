const Project = require('../models/project.model')

const createProject = async (data) => {
  const project = new Project(data)
  return await project.save()
}

const getAllProjects = async () => {
  return await Project.find().sort({ createdAt: -1 })
}

const getProjectById = async (id) => {
  return await Project.findById(id)
}

const countProjects = async () => {
  return await Project.countDocuments()
}

// Cập nhật project
const updateProject = async (id, data) => {
  return await Project.findByIdAndUpdate(id, data, { new: true })
}

// Xóa project
const deleteProject = async (id) => {
  return await Project.findByIdAndDelete(id)
}

module.exports = {
  createProject,
  getAllProjects,
  getProjectById,
  countProjects,
  updateProject,
  deleteProject,
}
