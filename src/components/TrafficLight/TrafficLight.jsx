import React, { useEffect } from 'react';
import { useTrafficLight } from '../TrafficLightContext/TrafficLightContext';
import GreenLight from "../GreenLight/GreenLight"
import PedestrianButton from "../PedestrianButton/PedestrianButton"
import RedLight from "../RedLight/RedLight"
import YellowLight from "../YellowLight/YellowLight"
import './TrafficLight.css'

const TrafficLight = () => {
  const { state, dispatch } = useTrafficLight();

  useEffect(() => {
    let timer;
    
    if (state.countdown > 0) {
      timer = setTimeout(() => {
        dispatch({
          type: 'CHANGE_LIGHT',
          payload: { light: state.currentLight, countdown: state.countdown - 1 },
        });
      }, 1000);
    } else {
      changeLight();
    }

    return () => clearTimeout(timer);
  }, [state.countdown, state.currentLight]);

  const changeLight = () => {
    if (state.currentLight === 'green') {
      if (state.pedestrianRequested) {
        dispatch({ type: 'CHANGE_LIGHT', payload: { light: 'red', countdown: 12 } });
        dispatch({ type: 'RESET_REQUEST' });
      } else {
        dispatch({ type: 'CHANGE_LIGHT', payload: { light: 'yellow', countdown: 3 } });
      }
    } else if (state.currentLight === 'yellow') {
      dispatch({ type: 'CHANGE_LIGHT', payload: { light: 'red', countdown: 7 } });
    } else if (state.currentLight === 'red') {
      dispatch({ type: 'CHANGE_LIGHT', payload: { light: 'green', countdown: 10 } });
    }
  };

  return (
    <div className="traffic-light-container">
      <GreenLight isActive={state.currentLight === 'green'} countdown={state.currentLight === 'green' ? state.countdown : null} />
      <YellowLight isActive={state.currentLight === 'yellow'} countdown={state.currentLight === 'yellow' ? state.countdown : null} />
      <RedLight isActive={state.currentLight === 'red'} countdown={state.currentLight === 'red' ? state.countdown : null} />
      <PedestrianButton />
    </div>
  );
};

export default TrafficLight;
