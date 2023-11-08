import React from "react";

import "./Agents.css";

const RoleFilter = ({ roles, selectedRole, onRoleSelect }) => {
  return (
    <div className="role-buttons">
      {Array.isArray(roles) &&
        roles.map((roleName, index) => (
          <button
            key={index}
            className={`primary role-button ${
              selectedRole?.toLowerCase() === roleName.toLowerCase()
                ? "active"
                : ""
            }`}
            onClick={() => onRoleSelect(roleName)}
          >
            <span className="label-text">{roleName}</span>
            <span className="hover-effect"></span>
          </button>
        ))}
    </div>
  );
};

export default RoleFilter;
