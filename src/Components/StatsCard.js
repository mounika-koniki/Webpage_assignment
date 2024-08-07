//importing the required libraries
import React from 'react';
import './StatsCard.css';

function StatsCard ({ icon, label, value, trend }) {
  
  return (
    <div className="stats-card">
      <div className="icon">{icon}</div>
      <div className="details">
        <div className="label">{label}</div>
        <div className="value">{value}</div>
        <div className="trend">{trend}</div>
      </div>
    </div>
  );
};

export default StatsCard;
