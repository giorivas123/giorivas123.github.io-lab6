// src/App.js
import React, { useState } from 'react';
import RepetitionExercise from './components/RepetitionExercise';
import DurationExercise from './components/DurationExercise';
import DistanceExercise from './components/DistanceExercise';

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleExerciseSelect = (exerciseType) => {
    setSelectedExercise(exerciseType);
  };

  const renderExerciseComponent = () => {
    switch (selectedExercise) {
      case 'RepetitionExercise':
        return <RepetitionExercise name="Repetition Exercise" />;
      case 'DurationExercise':
        return <DurationExercise name="Duration Exercise" />;
      case 'DistanceExercise':
        return <DistanceExercise name="Distance Exercise" />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <h1>Exercise Tracker</h1>
      <div>
        <button onClick={() => handleExerciseSelect('RepetitionExercise')}>Repetition Exercise</button>
        <button onClick={() => handleExerciseSelect('DurationExercise')}>Duration Exercise</button>
        <button onClick={() => handleExerciseSelect('DistanceExercise')}>Distance Exercise</button>
      </div>
      {selectedExercise && (
        <div>
          <h2>{selectedExercise}</h2>
          {renderExerciseComponent()}
        </div>
      )}
    </div>
  );
}

export default App;