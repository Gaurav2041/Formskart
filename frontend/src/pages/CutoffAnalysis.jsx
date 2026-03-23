function CutoffAnalysis() {
  return (
    <div className="content-page">
      <h1>JEE Main – Last 5 Year Cutoff</h1>

      <table className="cutoff-table">
        <thead>
          <tr>
            <th>Year</th>
            <th>General</th>
            <th>EWS</th>
            <th>OBC-NCL</th>
            <th>SC</th>
            <th>ST</th>
            <th>PwD</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>2025</td><td>93.10</td><td>80.38</td><td>79.43</td><td>61.15</td><td>47.90</td><td>~0.008</td></tr>
          <tr><td>2024</td><td>93.23</td><td>81.32</td><td>79.67</td><td>60.09</td><td>46.69</td><td>~0.002</td></tr>
          <tr><td>2023</td><td>90.78</td><td>75.62</td><td>73.61</td><td>51.98</td><td>37.23</td><td>~0.0013</td></tr>
          <tr><td>2022</td><td>88.41</td><td>63.11</td><td>67.00</td><td>43.08</td><td>26.78</td><td>~0.003</td></tr>
          <tr><td>2021</td><td>87.89</td><td>66.22</td><td>68.02</td><td>46.88</td><td>34.67</td><td>~0.01</td></tr>
        </tbody>
      </table>
    </div>
  );
}

export default CutoffAnalysis;