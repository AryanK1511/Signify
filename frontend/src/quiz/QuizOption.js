import React from "react";

const QuizOption = ({ option, onSelect, isSelected }) => {
  const imagePath = `/images/Main/quiz/${option}_gesture.png`;

  return (
    <div className={`px-4 py-2 rounded-lg font-medium ${isSelected ? 'bg-gray-200' : 'bg-white'} shadow-md hover:bg-gray-100 transition-colors duration-150`}>
    <button onClick={()=>onSelect(option)}>
        <h2>{option?"TRUE":"FALSE"}</h2>
    </button>
    </div>
  );
};

export default QuizOption;