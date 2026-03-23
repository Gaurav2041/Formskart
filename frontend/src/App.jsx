import { Routes, Route, Link } from "react-router-dom";
import JoSAA from "./pages/JoSAA";
import ExamUpdates from "./pages/ExamUpdates";
import CollegePredictor from "./pages/CollegePredictor";
import CutoffAnalysis from "./pages/CutoffAnalysis";
import RankBranch from "./pages/RankBranch";
import "./App.css";

function App() {
  return (
    <div className="container">

      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="sidebar-title">Features</h2>
        <ul className="feature-list">
          <li><Link to="/josaa">JoSAA Counselling</Link></li>
          <li><Link to="/exam-updates">Exam Updates</Link></li>
          <li><Link to="/college-predictor">College Predictor</Link></li>
          <li><Link to="/cutoff-analysis">Cutoff Analysis</Link></li>
          <li><Link to="/rank-branch">Rank vs Branch Data</Link></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="center-content">
        <Routes>
          <Route path="/" element={
            <>
              <h1 className="logo">FORMSKART</h1>
              <p className="tagline">
                Your Complete Admission Guidance Platform
              </p>
            </>
          }/>
          <Route path="/josaa" element={<JoSAA />} />
          <Route path="/exam-updates" element={<ExamUpdates />} />
          <Route path="/college-predictor" element={<CollegePredictor />} />
          <Route path="/cutoff-analysis" element={<CutoffAnalysis />} />
          <Route path="/rank-branch" element={<RankBranch />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;