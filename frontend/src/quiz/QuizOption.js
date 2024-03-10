import React from "react";

const QuizOption = ({ option, onSelect }) => {
  const imagePath = `/images/Main/quiz/${option}_gesture.png`;

  return (
    <button onClick={()=>onSelect(option)}>
        <h2>{option?"TRUE":"FALSE"}</h2>
    </button>
  );
};

export default QuizOption;