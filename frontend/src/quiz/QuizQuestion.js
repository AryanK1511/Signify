
import React from "react";

const QuizQuestion = ({questionIndex, questionText}) => {
return(
    <div className="question text-lg font-semibold mb-4">
    {questionText}
    </div>
)
}

export default QuizQuestion;