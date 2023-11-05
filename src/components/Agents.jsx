import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import "./Agents.css";

const Agents = () => {
  const [agents, setAgents] = useState([]);
  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState("");

  useEffect(() => {
    axios
      .get("https://valorant-api.com/v1/agents?isPlayableCharacter=true")
      .then((response) => {
        const playableAgents = response.data.data.filter(
          (agent) => agent.isPlayableCharacter
        );
        setAgents(playableAgents);

        const uniqueRoles = Array.from(
          new Set(playableAgents.map((agent) => agent.role.displayName))
        );
        setRoles(uniqueRoles);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const handleRoleClick = (role) => {
    setSelectedRole(role);
  };

  const filteredAgents = selectedRole
    ? agents.filter((agent) => agent.role.displayName === selectedRole)
    : agents;

  return (
    <>
      <NavBar />
      <section className="agents-preview">
        <h2 className="list">{selectedRole || "Meet the Agents"}</h2>
        <div className="role-buttons">
          {roles.map((role, index) => (
            <button key={index} onClick={() => handleRoleClick(role)}>
              {role}
            </button>
          ))}
          <button onClick={() => setSelectedRole("")}>All Agents</button>
        </div>
        <div className="agent-cards">
          {filteredAgents.map((agent) => (
            <Link
              to={`/agent/${agent.uuid}`}
              key={agent.uuid}
              className="agent-card"
            >
              <img
                src={agent.displayIcon}
                alt={agent.displayName}
                style={{ width: "100px" }}
              />
              <h3>{agent.displayName}</h3>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Agents;
