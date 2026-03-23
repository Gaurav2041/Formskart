const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const College = require("./src/models/College");

dotenv.config();

// Connect DB
mongoose.connect(process.env.MONGO_URI);

const importData = async () => {
  try {
    // Correct path to data folder (IMPORTANT)
    const filePath = path.join(__dirname, "../Data/josaa_data.json");

    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    await College.deleteMany(); // optional (clears old data)

    await College.insertMany(data);

    console.log("✅ Data Imported Successfully");
    process.exit();
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
};

importData();