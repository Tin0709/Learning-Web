import './App.css';
import React, { useState, useEffect, useRef } from "react";

function App() {
  const [time, setTime] = useState(0); // time in seconds
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);
 useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="App">
      <h1>⏱ Stopwatch</h1>
      <div className="time-display">{formatTime(time)}</div>
      <div className="buttons">
        <button onClick={() => setIsRunning(true)} disabled={isRunning}>
          Start
        </button>
        <button onClick={() => setIsRunning(false)} disabled={!isRunning}>
          Stop
        </button>
        <button onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
