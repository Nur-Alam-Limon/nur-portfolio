import mongoose from "mongoose";

const EducationSchema = new mongoose.Schema({
  institution: String,
  degree: String,
  from: String,
  to: String,
  details: String,
});

export default mongoose.models.Education || mongoose.model("Education", EducationSchema);
