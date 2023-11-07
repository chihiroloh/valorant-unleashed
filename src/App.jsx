import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import Agents from "./components/Agents";
import AgentDetail from "./components/AgentDetail";

const App = () => {
  const [selectedRole, setSelectedRole] = useState("");

  const handleFetchError = (error) => {
    console.error("Fetching agent details failed:", error);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/agents"
          element={
            <Agents
              selectedRole={selectedRole}
              onRoleSelect={setSelectedRole}
            />
          }
        />
        <Route
          path="/agents/:role"
          element={
            <Agents
              selectedRole={selectedRole}
              onRoleSelect={setSelectedRole}
            />
          }
        />
        <Route
          path="/agent/:agentId"
          element={
            <AgentDetail
              containerClassName="custom-container-class"
              onFetchError={handleFetchError}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
