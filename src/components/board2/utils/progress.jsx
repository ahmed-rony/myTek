import React, { useState } from 'react';
import './CircleProgress.css'

const ProgressBar = ({ progress }) => {
  const [value, setValue] = useState(progress);

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value);
    if (newValue >= 0 && newValue <= 100) {
      setValue(newValue);
    }
  };

  return (
    <div className="progress-bar">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        className="slider"
        id="myRange"
      />
      <div className="progress-value">{value}%</div>
    </div>
  );
};

const CircleProgress = () => {
  const [progress, setProgress] = useState(0);

  const handleClick = () => {
    setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Increase progress</button>
      <ProgressBar progress={progress} />
    </div>
  );
};

export default CircleProgress;