import React from 'react';

const YellowLight = ({ isActive, countdown }) => (
  <div className={`light yellow ${isActive ? 'active' : ''}`}>
    {isActive && <div className="countdown">{countdown}</div>}
  </div>
);

export default YellowLight;
