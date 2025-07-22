import React, { useState } from "react";
import choices from "../data/choices";
import ChoiceButton from "./ChoiceButton";
import ResultDisplay from "./ResultDisplay";

const Game = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");

  const playRound = (choice) => {
    setPlayerChoice(null); // Reset to trigger animation
    setComputerChoice(null);
    setResult("");

    const compChoiceKey = Object.keys(choices)[Math.floor(Math.random() * 5)];
    const compChoice = choices[compChoiceKey];

    setTimeout(() => {
      setPlayerChoice(choices[choice]);
      setComputerChoice(compChoice);

      if (choice === compChoiceKey) {
        setResult("It's a tie!");
      } else if (choices[choice].beats.includes(compChoiceKey)) {
        setResult("You win!");
      } else {
        setResult("You lose!");
      }
    }, 500); // 500ms delay
  };

  return (
    <div>
      <h2>Rock, Paper, Scissors, Lizard, Spock</h2>
      <div>
        {Object.keys(choices).map((key) => (
          <ChoiceButton key={key} name={key} onClick={() => playRound(key)} />
        ))}
      </div>
      <ResultDisplay
        playerChoice={playerChoice}
        computerChoice={computerChoice}
        result={result}
      />
    </div>
  );
};

export default Game;
