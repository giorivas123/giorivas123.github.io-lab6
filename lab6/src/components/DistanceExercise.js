// src/components/DistanceExercise.js
import React, { useState } from 'react';

const DistanceExercise = ({ name }) => {
  const [distance, setDistance] = useState(0);

  const handleIncrement = () => {
    setDistance(distance + 1); // Increment distance by 1 (you can adjust as needed)
  };

  const handleReset = () => {
    setDistance(0);
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>Distance: {distance} miles</p>
      <button onClick={handleIncrement}>Increment Distance</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default DistanceExercise;