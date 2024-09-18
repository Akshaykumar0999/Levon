import React from 'react';
import './App.css'
import { TrafficLightProvider } from './components/TrafficLightContext/TrafficLightContext';
import TrafficLight from './components/TrafficLight/TrafficLight';

function App() {
  return (
    <TrafficLightProvider>
      <div className="App-container">
        <TrafficLight />
      </div>
    </TrafficLightProvider>
  );
}

export default App;
