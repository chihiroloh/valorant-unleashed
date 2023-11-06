import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Agents.css";

const Agents = () => {
  const [agents, setAgents] = useState([]);
  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState("");
  const navigate = useNavigate();
  const { role } = useParams();

  useEffect(() => {
    axios //promise returned by axios.get is resolved (http successful)
      .get("https://valorant-api.com/v1/agents?isPlayableCharacter=true")
      .then((response) => {
        //and receives response object
        const playableAgents = response.data.data.filter(
          //data sent back by the server, filter each agent is playable character
          (agent) => agent.isPlayableCharacter
        );
        setAgents(playableAgents);

        const uniqueRoles = Array.from(
          new Set(playableAgents.map((agent) => agent.role.displayName))
        );
        setRoles(uniqueRoles); //filter agents by role
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  useEffect(() => {
    // Update the selectedRole when URL changes
    setSelectedRole(role ? decodeURIComponent(role) : "");
  }, [role]);

  const handleRoleClick = (roleName) => {
    navigate(`/agents/${encodeURIComponent(roleName)}`); // Navigate to the URL with encoded role
  };

  // Filter agents based on the URL role parameter
  const filteredAgents = role
    ? agents.filter(
        (agent) =>
          agent.role.displayName.toLowerCase() ===
          decodeURIComponent(role).toLowerCase()
      )
    : agents;

  // Inside the Agents component
  const handleAgentClick = (agent) => {
    // This function will be called when an agent card is clicked
    onAgentSelect(agent);
    // Navigation logic follows
  };

  return (
    <>
      <NavBar />
      <br />
      <br />
      <section className="agents-preview">
        <h2 className="list">{selectedRole || "Meet the Agents"}</h2>
        <br />
        <br />
        <div className="role-buttons">
          {roles.map((roleName, index) => (
            <button
              key={index}
              className={`primary ${
                selectedRole.toLowerCase() === roleName.toLowerCase()
                  ? "active"
                  : ""
              }`} // Add 'active' class based on selection
              onClick={() => handleRoleClick(roleName)}
            >
              <span className="label-text">{roleName}</span>
              <span className="hover-effect"></span>
            </button>
          ))}
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
