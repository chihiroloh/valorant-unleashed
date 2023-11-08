import React from "react";
import { Link } from "react-router-dom";
import "./Agents.css";

const Agents = ({ agents, selectedRole }) => {
  const filteredAgents = selectedRole
    ? agents.filter(
        (agent) =>
          agent.role.displayName.toLowerCase() === selectedRole.toLowerCase()
      )
    : agents;

  return (
    <section className="agents-preview">
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
  );
};

export default Agents;
