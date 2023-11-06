import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Agents from "./components/Agents";
import AgentDetail from "./components/AgentDetail";

const App = () => {
  const [selectedRole, setSelectedRole] = useState(""); // Lifted state

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Set as root path */}
        <Route path="/home" element={<Home />} />
        {/* Pass selectedRole and setSelectedRole as props to Agents */}
        <Route
          path="/agents"
          element={
            <Agents
              selectedRole={selectedRole}
              setSelectedRole={setSelectedRole}
            />
          }
        />
        <Route
          path="/agents/:role"
          element={
            <Agents
              selectedRole={selectedRole}
              setSelectedRole={setSelectedRole}
            />
          }
        />
        {/* Pass additional props to AgentDetail */}
        <Route
          path="/agent/:agentId"
          element={
            <AgentDetail
              additionalProp1="value1"
              additionalProp2="value2"
              additionalProp3="value3"
              additionalProp4="value4"
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
