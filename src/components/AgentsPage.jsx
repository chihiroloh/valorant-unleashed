import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import Agents from "./Agents";
import RoleFilter from "./RoleFilter";

const AgentsPage = () => {
  const [agents, setAgents] = useState([]);
  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState("");
  const navigate = useNavigate();
  const { role } = useParams();

  useEffect(() => {
    axios
      .get("https://valorant-api.com/v1/agents?isPlayableCharacter=true")
      .then((response) => {
        const playableAgents = response.data.data.filter(
          (agent) => agent.isPlayableCharacter
        );
        setAgents(playableAgents);
        setRoles([
          ...new Set(playableAgents.map((agent) => agent.role.displayName)),
        ]);
      })
      .catch((error) => console.error("Error fetching agents:", error));
  }, []);

  useEffect(() => {
    if (role) {
      setSelectedRole(decodeURIComponent(role));
    } else {
      setSelectedRole(""); //if theres nothing in params, setSelectedRole to nothing = default to showing everything
    }
  }, [role]);

  const handleRoleSelect = (roleName) => {
    setSelectedRole(roleName);
    navigate(`/agents/${encodeURIComponent(roleName.toLowerCase())}`);
  };

  return (
    <>
      <NavBar />
      <br />
      <h2 className="list">{selectedRole || "Meet the Agents"}</h2>
      <RoleFilter
        roles={roles}
        selectedRole={selectedRole}
        onRoleSelect={handleRoleSelect}
      />
      <Agents agents={agents} selectedRole={selectedRole} />
    </>
  );
};

export default AgentsPage;
