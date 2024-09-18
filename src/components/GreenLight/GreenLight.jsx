import React from 'react';

const GreenLight = ({ isActive, countdown }) => (
  <div className={`light green ${isActive ? 'active' : ''}`}>
    {isActive && <div className="countdown">{countdown}</div>}
  </div>
);

export default GreenLight;
