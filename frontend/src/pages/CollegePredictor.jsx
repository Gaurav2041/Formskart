import React, { useState } from "react";

function CollegePredictor() {
  const [rank, setRank] = useState("");
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSearched(true);

    try {
      const response = await fetch("/api/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rank: Number(rank),
        }),
      });

      const rawBody = await response.text();
      const data = rawBody ? JSON.parse(rawBody) : null;
      console.log("API Response:", data);

      if (response.ok) {
        setColleges(Array.isArray(data) ? data : []);
      } else {
        setColleges([]);
        alert(data?.message || data?.error || `Request failed with status ${response.status}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Could not reach the predictor service.");
      setColleges([]);
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "2rem",
        backgroundColor: "#1e1e1e",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "yellow", textAlign: "center" }}>
        College Predictor
      </h1>

      <form onSubmit={handleSubmit}>
        <label>
          Enter Rank:
          <input
            type="number"
            value={rank}
            onChange={(e) => setRank(e.target.value)}
            required
            style={{
              marginLeft: "1rem",
              padding: "0.5rem",
              borderRadius: "5px",
            }}
          />
        </label>

        <br /><br />

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "yellow",
            color: "black",
            borderRadius: "5px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          {loading ? "Predicting..." : "Predict Colleges"}
        </button>
      </form>

      <br />

      {/* ✅ TABLE */}
      {colleges.length > 0 && (
        <table
          border="1"
          cellPadding="10"
          style={{
            width: "100%",
            backgroundColor: "#2b2b2b",
            color: "white",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th style={{ color: "yellow" }}>Institute</th>
              <th style={{ color: "yellow" }}>Program</th>
              <th style={{ color: "yellow" }}>Category</th>
              <th style={{ color: "yellow" }}>Opening Rank</th>
              <th style={{ color: "yellow" }}>Closing Rank</th>
            </tr>
          </thead>
          <tbody>
            {colleges.map((college, index) => (
              <tr key={index}>
                <td>{college.institute}</td>
                <td>{college.program}</td>
                <td>{college.category}</td>
                <td>{college.openingRank}</td>
                <td>{college.closingRank}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* ✅ NO RESULT MESSAGE */}
      {colleges.length === 0 && !loading && searched && (
        <p style={{ color: "yellow", textAlign: "center" }}>
          No colleges found for this rank.
        </p>
      )}
    </div>
  );
}

export default CollegePredictor;
