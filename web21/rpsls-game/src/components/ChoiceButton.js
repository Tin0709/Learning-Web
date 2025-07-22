import React from "react";

const ChoiceButton = ({ name, onClick }) => {
  return (
    <button onClick={onClick}>
      {name.charAt(0).toUpperCase() + name.slice(1)}
    </button>
  );
};

export default ChoiceButton;
