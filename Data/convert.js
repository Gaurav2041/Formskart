import xlsx from "xlsx";
import fs from "fs";

// Read Excel file
const workbook = xlsx.readFile("Mahadata.xlsx");

// Get first sheet
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

// Convert to JSON
let data = xlsx.utils.sheet_to_json(sheet);

// Rename fields
data = data.map(row => ({
  institute_name: row["Institute"],
  branch: row["Academic Program Name"],
  quota: row["Quota"],
  category: row["Seat Type"],
  gender: row["Gender"],
  opening_rank: Number(row["Opening Rank"]),
  closing_rank: Number(row["Closing Rank"])
}));

// Filter invalid rows
data = data.filter(row => row.opening_rank && row.closing_rank);

// Sort
data.sort((a, b) => a.closing_rank - b.closing_rank);

// Save JSON
fs.writeFileSync("josaa_data.json", JSON.stringify(data, null, 2));

console.log("✅ JSON created!");