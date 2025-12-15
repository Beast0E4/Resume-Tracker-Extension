import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    company: String,
    role: String,
    jobUrl: String,
    status: {
      type: String,
      default: "Applied"
    },
    appliedAt: Date
  },
  { timestamps: true }
);

export default mongoose.model("Application", applicationSchema);
