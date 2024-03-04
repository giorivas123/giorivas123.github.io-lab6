// src/components/RepetitionExercise.js
import React, { useState } from 'react';

const RepetitionExercise = ({ name }) => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleReset = () => {
    setCounter(0);
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>Repetitions: {counter}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default RepetitionExercise;