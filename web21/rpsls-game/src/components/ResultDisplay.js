import React from "react";

const ResultDisplay = ({ playerChoice, computerChoice, result }) => {
  if (!playerChoice || !computerChoice) return null;

  const emojiMap = {
    rock: "🪨",
    paper: "📄",
    scissors: "✂️",
    lizard: "🦎",
    spock: "🖖",
  };

  return (
    <div className="result-card">
      <p>
        You chose:{" "}
        <strong>
          {emojiMap[playerChoice.name.toLowerCase()]} {playerChoice.name}
        </strong>
      </p>
      <p>
        Computer chose:{" "}
        <strong>
          {emojiMap[computerChoice.name.toLowerCase()]} {computerChoice.name}
        </strong>
      </p>
      <h3
        style={{
          color:
            result === "You win!"
              ? "green"
              : result === "You lose!"
              ? "red"
              : "gray",
        }}
      >
        {result}
      </h3>
    </div>
  );
};

export default ResultDisplay;
