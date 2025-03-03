import React from "react";
import "./StatsCard.css";

const StatsCard = ({ title, value, color }) => {
  return (
    <div className={`stats-card ${color}`}>
      <h2>{title}</h2>
      <p>{value}</p>
    </div>
  );
};

export default StatsCard;
