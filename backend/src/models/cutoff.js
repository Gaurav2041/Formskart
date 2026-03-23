import mongoose from "mongoose";

const cutoffSchema = new mongoose.Schema({
  institute_name: String,
  branch: String,
  quota: String,
  category: String,
  gender: String,
  opening_rank: Number,
  closing_rank: Number,
});

// 🔥 important for speed
cutoffSchema.index({ category: 1, quota: 1, gender: 1, closing_rank: 1 });

export default mongoose.model("Cutoff", cutoffSchema);