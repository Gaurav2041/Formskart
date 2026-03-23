const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./src/config/db");
const predictorRoutes = require("./src/routes/predictor");
// Load env variables
dotenv.config();

const app = express();

// Connect MongoDB
connectDB();

// CORS configuration
// Allow the frontend dev server origin (Vite default: http://localhost:5173)
const corsOptions = {
  origin: process.env.FRONTEND_ORIGIN || "http://localhost:5173",
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  // If you need to send cookies/auth from the frontend, set credentials: true
  // and ensure the frontend sets fetch(..., { credentials: 'include' })
  credentials: false,
  optionsSuccessStatus: 200,
};

// Middleware
app.use(cors(corsOptions));
// The cors() middleware above will handle preflight requests automatically.
// If you need a custom preflight response, add a dedicated middleware instead
// of using app.options with a glob pattern that may be incompatible with
// the installed router/path-to-regexp versions.

app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("API Running 🚀");
});

// Predictor routes
app.use("/api", predictorRoutes);

// Port
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});