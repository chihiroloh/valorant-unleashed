import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBar";
import "./AgentDetail.css";

const AgentDetail = () => {
  const { agentId } = useParams();
  const [agentDetails, setAgentDetails] = useState(null);
  // State to keep track of the selected ability
  const [selectedAbility, setSelectedAbility] = useState(null);

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

  // Function to handle clicking on an ability
  const handleAbilityClick = (abilityIndex) => {
    setSelectedAbility(abilityIndex === selectedAbility ? null : abilityIndex);
  };

  return (
    <div className="agent-detail-container">
      <NavBar />
      <div className="agent-content">
        <div className="agent-profile">
          <img
            className="agent-image"
            src={agentDetails.fullPortrait}
            alt={agentDetails.displayName}
          />
        </div>
        <div className="agent-info">
          <h1 className="displayname">{agentDetails.displayName}</h1>
          <div>
            <h2 className="role">Role: {agentDetails.role?.displayName}</h2>
            <p>{agentDetails.role?.description}</p>
          </div>
          <br />
          <div>
            <h3 className="description">Description</h3>
            <p>{agentDetails.description}</p>
          </div>
          <br />
          <div className="agent-abilities">
            <h2 className="abilitiesheader">Abilities:</h2>
            <br />
            <div className="ability-buttons">
              {agentDetails.abilities.map((ability, index) => (
                <button
                  key={index}
                  className={`ability-button ${
                    selectedAbility === index ? "selected" : ""
                  }`}
                  onClick={() => handleAbilityClick(index)}
                  aria-label={`Ability: ${ability.displayName}`}
                >
                  <img
                    className="ability-image"
                    src={ability.displayIcon}
                    alt={ability.displayName}
                  />
                </button>
              ))}
            </div>
            <br />
            {selectedAbility !== null && (
              <div
                className={`ability-description ${
                  selectedAbility !== null ? "visible" : ""
                }`}
              >
                <h3>{agentDetails.abilities[selectedAbility].displayName}</h3>
                <p>{agentDetails.abilities[selectedAbility].description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AgentDetail;
