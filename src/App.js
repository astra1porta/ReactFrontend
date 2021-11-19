import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";

import './App.css';

function App() {
  const db = {
  name: "Bill Smith",
  version: "1.0.0",
  navBarDropDowns: [
    {
      airlineName: "American Airlines",
      bidTypesPath: "american-airlines/bidTypes",
      pilotsPath: "american-airlines/pilots",
    },
    {
      airlineName: "Alaska Airlines",
      bidTypesPath: "alaska-airlines/bidTypes",
      pilotsPath: "alaska-airlines/pilots",
    },
    {
      airlineName: "Frontier Airlines",
      bidTypesPath: "frontier-airlines/bidTypes",
      pilotsPath: "frontier-airlines/pilots",
    },
    {
      airlineName: "UPS",
      bidTypesPath: "UPS/bidTypes",
      pilotsPath: "UPS/pilots",
    },
  ],
};
  return (
    <Router>
      <Routes>
        <Route
          path=""
          element={<HomePage navBarDropDowns={db.navBarDropDowns} name={db.name} version={db.version} />}
        />
        <Route path="american-airlines/bidTypes" element={<HomePage />} />
        <Route path="alaska-airlines/bidTypes" element={<HomePage />} />
        <Route path="frontier-airlines/bidTypes" element={<HomePage />} />
        <Route path="UPS-airlines/bidTypes" element={<HomePage />} />
        <Route path="american-airlines/pilots" element={<HomePage />} />
        <Route path="alaska-airlines/pilots" element={<HomePage />} />
        <Route path="frontier-airlines/pilots" element={<HomePage />} />
        <Route path="UPS-airlines/pilots" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
