import mongoose from "mongoose";

const AdminProfileSchema = new mongoose.Schema({
  picture: String,
  resume: String,
  github: String,
  linkedin: String,
  facebook: String,
  medium: String,
}, { timestamps: true });

export default mongoose.models.AdminProfile || mongoose.model("AdminProfile", AdminProfileSchema);
