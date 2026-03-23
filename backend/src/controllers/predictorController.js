const path = require("path");
const localCollegeData = require(path.join(__dirname, "../../../Data/josaa_data.json"));

const normalizeCollege = (college) => ({
  institute: college.institute || college["Institute"] || college.institute_name,
  program:
    college.program ||
    college["Academic Program Name"] ||
    college.branch,
  category: college.category || college["Seat Type"] || college.seatType,
  openingRank:
    college.openingRank ?? college["Opening Rank"] ?? college.opening_rank,
  closingRank:
    college.closingRank ?? college["Closing Rank"] ?? college.closing_rank,
});

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

    const formattedColleges = localCollegeData
      .filter((college) => Number(college.closing_rank) >= rankNum)
      .map(normalizeCollege);

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
