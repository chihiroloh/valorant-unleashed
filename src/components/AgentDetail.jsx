import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBar";

const AgentDetail = () => {
  const { agentId } = useParams();
  const [agentDetails, setAgentDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`https://valorant-api.com/v1/agents/${agentId}`)
      .then((response) => {
        setAgentDetails(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching agent details: ", error);
      });
  }, [agentId]);

  if (!agentDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavBar />
      <div>
        <h1>{agentDetails.displayName}</h1>
        <img src={agentDetails.fullPortrait} alt={agentDetails.displayName} />
        <h2>Role: {agentDetails.role?.displayName}</h2>
        <p>{agentDetails.role?.description}</p>
        <div>
          <h3>Description</h3>
          <p>{agentDetails.description}</p>
        </div>
        <div>
          <h2>Abilities:</h2>
          {agentDetails.abilities.map((ability, index) => (
            <div key={index}>
              <h3>{ability.displayName}</h3>
              <p>{ability.description}</p>
              {ability.displayIcon && (
                <img src={ability.displayIcon} alt={ability.displayName} />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AgentDetail;
