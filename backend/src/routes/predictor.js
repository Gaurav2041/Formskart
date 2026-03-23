const express = require("express");
const router = express.Router();
const { predictCollege } = require("../controllers/predictorController");

router.post("/predict", predictCollege);

module.exports = router;