import React, { createContext, useReducer, useContext } from 'react';

const TrafficLightContext = createContext();

const initialState = {
  currentLight: 'green',
  pedestrianRequested: false,
  countdown: 10,
  emergencyOverride: false,
};

const lightReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_LIGHT':
      return {
        ...state,
        currentLight: action.payload.light,
        countdown: action.payload.countdown,
      };
    case 'REQUEST_CROSSING':
      return { ...state, pedestrianRequested: true };
    case 'EMERGENCY_OVERRIDE':
      return { ...state, emergencyOverride: true };
    case 'RESET_REQUEST':
      return { ...state, pedestrianRequested: false };
    default:
      return state;
  }
};

export const TrafficLightProvider = ({ children }) => {
  const [state, dispatch] = useReducer(lightReducer, initialState);

  return (
    <TrafficLightContext.Provider value={{ state, dispatch }}>
      {children}
    </TrafficLightContext.Provider>
  );
};

export const useTrafficLight = () => useContext(TrafficLightContext);
