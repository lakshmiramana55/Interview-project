import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-icon">
        <span role="img" aria-label="app-icon">🌟</span>
      </div>

      <div className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      <ul>
        <li>
          <span role="img" aria-label="dashboard">📊</span> {isOpen && "Dashboard"}
        </li>
        <li>
          <span role="img" aria-label="profile">👤</span> {isOpen && "Profile"}
        </li>
        <li>
          <span role="img" aria-label="settings">⚙️</span> {isOpen && "Settings"}
        </li>
       
      </ul>
    </div>
  );
};

export default Sidebar;
