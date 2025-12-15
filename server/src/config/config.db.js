import mongoose from "mongoose";

const MONGO_DB_URL = process.env.MONGO_DB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_DB_URL);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("DB connection failed", error);
    process.exit(1);
  }
};

export default connectDB;
