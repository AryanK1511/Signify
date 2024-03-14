import React from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const QuizOption = ({ option, onSelect, isSelected }) => {
  const imagePath = `/images/Main/quiz/${option}_gesture.png`;

  return (
    <div
      className={`px-4 py-2 rounded-lg font-medium mx-5 my-10 ${
        isSelected ? "bg-gray-200" : "bg-white"
      } shadow-md hover:bg-gray-100 transition-colors duration-150`}
    >
      <button
        className="flex flex-col items-center text-xl md:text-3xl mx-5"
        onClick={() => onSelect(option)}
      >
        {option ? (
          <FaThumbsUp className="mb-2 text-green-500" size="5em" />
        ) : (
          <FaThumbsDown className="mb-2 text-red-500" size="5em" />
        )}
        <p>{option ? "TRUE" : "FALSE"}</p>
      </button>
    </div>
  );
};

export default QuizOption;
