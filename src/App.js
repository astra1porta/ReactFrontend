import React from "react";
import {BrowswerRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/home";

import './App.css';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="" element={<HomePage />} />
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
