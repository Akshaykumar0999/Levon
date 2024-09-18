import React from 'react';
import '../TrafficLight/TrafficLight.css'
const RedLight = ({ isActive, countdown }) => (
  <div className={`light red ${isActive ? 'active' : ''}`}>
    {isActive && <div className="countdown">{countdown}</div>}
  </div>
);

export default RedLight;
