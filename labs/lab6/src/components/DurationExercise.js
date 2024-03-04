// src/components/DurationExercise.js
import React, { useState, useEffect } from 'react';

const DurationExercise = ({ name }) => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const formattedMinutes = String(minutes).padStart(2, '0');
    const remainingSeconds = seconds % 60;
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const handleStart = () => {
    setIsActive(true);
  };

  const handleReset = () => {
    setIsActive(false);
    setTimer(0);
  };

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive]);

  return (
    <div>
      <h3>{name}</h3>
      <p>Duration: {formatTime(timer)}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default DurationExercise;