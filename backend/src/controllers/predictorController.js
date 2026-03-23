const College = require("../models/college");

const predictCollege = async (req, res) => {
  try {
    let { rank } = req.body;
    const rankNum = Number(rank);

    // ✅ Validation
    if (!rank || isNaN(rankNum)) {
      return res.status(400).json({
        error: "Please enter a valid rank",
      });
    }

    // ✅ Query directly from DB
    const colleges = await College.find({
      "Closing Rank": { $lte: rankNum }
    });

    // ✅ Format response (VERY IMPORTANT 🔥)
    const formattedColleges = colleges.map((c) => ({
      institute: c["Institute"],
      program: c["Academic Program Name"],
      openingRank: c["Opening Rank"],
      closingRank: c["Closing Rank"],
    }));

    // ✅ Handle empty result
    if (formattedColleges.length === 0) {
      return res.status(404).json({
        message: "No colleges found for this rank",
      });
    }

    res.status(200).json(formattedColleges);

  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      error: "Server Error",
    });
  }
};

module.exports = { predictCollege };