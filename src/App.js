import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from './Pages/dashboard';
import Home from './Pages/homepage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
