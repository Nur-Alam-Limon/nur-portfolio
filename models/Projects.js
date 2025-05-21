import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  category: { type: String, required: true },
  title: { type: String, required: true },
  description: String,
  stack: [{ name: String }],
  image: String,
  live: String,
  github: String,
}, { timestamps: true });

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema);
