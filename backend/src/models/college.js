const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema({
  institute: String,
  program: String,
  quota: String,
  seatType: String,
  gender: String,
  openingRank: Number,
  closingRank: Number,
});

module.exports = mongoose.model("College", collegeSchema);