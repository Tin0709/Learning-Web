// src/components/ResultDisplay.js
import React from "react";

const ResultDisplay = ({ playerChoice, computerChoice, result }) => {
  if (!playerChoice || !computerChoice) return null;

  return (
    <div>
      <p>
        You chose: <strong>{playerChoice.name}</strong>
      </p>
      <p>
        Computer chose: <strong>{computerChoice.name}</strong>
      </p>
      <h3>{result}</h3>
    </div>
  );
};

export default ResultDisplay;
