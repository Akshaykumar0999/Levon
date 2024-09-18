import React from 'react';
import { useTrafficLight } from '../TrafficLightContext/TrafficLightContext';

const PedestrianButton = () => {
  const { dispatch } = useTrafficLight();

  const handleRequestCrossing = () => {
    dispatch({ type: 'REQUEST_CROSSING' });
  };

  return (
    <div className="pedestrian-crossing">
      <button onClick={handleRequestCrossing} className="pedestrian-button">
        Request Crossing
      </button>
    </div>
  );
};

export default PedestrianButton;
