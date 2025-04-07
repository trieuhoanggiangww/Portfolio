const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    content: { type: String, required: true },
    tech: { type: String, required: true },
    image: { type: String, required: true },
    livelink: { type: String, default: null },
    repolink: { type: String, default: null },
    startDate: { type: String },
    endDate: { type: String },
    projectType: {
      type: String,
      enum: ['major', 'minor', 'exercise'],
      default: 'minor',
    },
  },
  { timestamps: true }
)

const Project = mongoose.model('Project', projectSchema)

module.exports = Project
