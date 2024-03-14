import React from "react";

const QuizQuestion = ({ questionIndex, questionText }) => {
  return (
    <div className="question text-4xl md:text-5xl font-semibold mb-4 text-center pb-5 text-[#fff]">
      {questionText}
    </div>
  );
};

export default QuizQuestion;
