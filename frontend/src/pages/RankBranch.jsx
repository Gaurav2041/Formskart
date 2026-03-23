function RankBranch() {
  return (
    <div className="content-page">
      <h1>Rank vs Branch Analysis</h1>

      <table className="cutoff-table">
        <thead>
          <tr>
            <th>Institute</th>
            <th>Branch</th>
            <th>Opening Rank</th>
            <th>Closing Rank</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>IIT Bombay</td><td>CSE</td><td>1</td><td>68</td></tr>
          <tr><td>IIT Delhi</td><td>CSE</td><td>27</td><td>116</td></tr>
          <tr><td>IIT Madras</td><td>CSE</td><td>85</td><td>158</td></tr>
          <tr><td>IIT Kanpur</td><td>CSE</td><td>100</td><td>248</td></tr>
          <tr><td>IIT Kharagpur</td><td>EE</td><td>500</td><td>800</td></tr>
          <tr><td>IIT Roorkee</td><td>EE</td><td>600</td><td>900</td></tr>
          <tr><td>IIT Guwahati</td><td>EE</td><td>700</td><td>1000</td></tr>
        </tbody>
      </table>
    </div>
  );
}

export default RankBranch;