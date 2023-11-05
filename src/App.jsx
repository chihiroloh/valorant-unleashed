import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Agents from "./components/Agents";
import AgentDetail from "./components/AgentDetail";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Set as root path */}
        <Route path="/home" element={<Home />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/agent/:agentId" element={<AgentDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
