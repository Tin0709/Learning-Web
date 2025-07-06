import React, { useState } from "react";
import "./Calculator.css";

const buttons = [
  [{ label: "MC" }, { label: "MR" }, { label: "M+" }, { label: "M-" }, { label: "MS" }, { label: "M^" }],
  [{ label: "%" }, { label: "CE" }, { label: "C" }, { label: "⌫" }],
  [{ label: "1/x" }, { label: "x²" }, { label: "√x" }, { label: "÷" }],
  [{ label: "7" }, { label: "8" }, { label: "9" }, { label: "×" }],
  [{ label: "4" }, { label: "5" }, { label: "6" }, { label: "-" }],
  [{ label: "1" }, { label: "2" }, { label: "3" }, { label: "+" }],
  [{ label: "+/-" }, { label: "0" }, { label: "." }, { label: "=" }],
];

function Calculator() {
  const [display, setDisplay] = useState("0");
  const [memory, setMemory] = useState(0);
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [operand, setOperand] = useState(null);

  const calculate = (a, b, op) => {
    switch (op) {
      case "+": return a + b;
      case "-": return a - b;
      case "×": return a * b;
      case "÷": return b === 0 ? "Error" : a / b;
      default: return b;
    }
  };

  const handleButtonClick = (label) => {
    if (!isNaN(label)) {
      if (display === "0" || waitingForOperand) {
        setDisplay(label);
        setWaitingForOperand(false);
      } else {
        setDisplay(display + label);
      }
    } else if (label === ".") {
      if (!display.includes(".")) setDisplay(display + ".");
    } else if (["+", "-", "×", "÷"].includes(label)) {
      setOperator(label);
      setOperand(parseFloat(display));
      setWaitingForOperand(true);
    } else if (label === "=") {
      if (operator && operand != null) {
        const result = calculate(operand, parseFloat(display), operator);
        setDisplay(result.toString());
        setOperator(null);
        setOperand(null);
        setWaitingForOperand(true);
      }
    } else if (label === "C") {
      setDisplay("0");
      setOperator(null);
      setOperand(null);
    } else if (label === "CE") {
      setDisplay("0");
    } else if (label === "⌫") {
      setDisplay(display.length > 1 ? display.slice(0, -1) : "0");
    } else if (label === "+/-") {
      setDisplay((parseFloat(display) * -1).toString());
    } else if (label === "%") {
      setDisplay((parseFloat(display) / 100).toString());
    } else if (label === "1/x") {
      setDisplay((1 / parseFloat(display)).toString());
    } else if (label === "x²") {
      setDisplay((Math.pow(parseFloat(display), 2)).toString());
    } else if (label === "√x") {
      setDisplay((Math.sqrt(parseFloat(display))).toString());
    } else if (label === "M+") {
      setMemory(memory + parseFloat(display));
    } else if (label === "M-") {
      setMemory(memory - parseFloat(display));
    } else if (label === "MS") {
      setMemory(parseFloat(display));
    } else if (label === "MR") {
      setDisplay(memory.toString());
    } else if (label === "MC") {
      setMemory(0);
    }
    // "M^" and other advanced memory functions can be implemented as needed
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        {buttons.map((row, i) => (
          <div className="button-row" key={i}>
            {row.map((btn, j) => (
              <button
                key={j}
                className={`button ${btn.label === "=" ? "equals" : ""}`}
                onClick={() => handleButtonClick(btn.label)}
              >
                {btn.label}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
