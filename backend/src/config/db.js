const mongoose = require("mongoose");

const connectDB = async () => {
  if (!process.env.MONGO_URI) {
    console.warn("MongoDB URI not configured. Starting without database connection.");
    return false;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");
    return true;
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    console.warn("Continuing without database connection.");
    return false;
  }
};

module.exports = connectDB;
