import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    position: { type: String, required: true },
    from: { type: String, required: true },
    to: { type: String, required: true },
    stacks: [String],
    summary: { type: String, required: true },
    icon: { type: String }, 
  },
  { timestamps: true }
);

export default mongoose.models.Experience ||
  mongoose.model("Experience", experienceSchema);
