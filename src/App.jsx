// App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import AgentsPage from "./components/AgentsPage";
import AgentDetail from "./components/AgentDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/agents" element={<AgentsPage />} />
        <Route path="/agents/:role" element={<AgentsPage />} />
        <Route path="/agent/:agentId" element={<AgentDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
