import React from "react";

const QuizExp = ({correctAnswer, selectedAnswer, onNext, questionExplanation}) => {
    const isCorrect = correctAnswer===selectedAnswer;
return(
    <div className="my-4">
    <p className={`${isCorrect ? 'text-green-500' : 'text-red-500'} font-semibold`}>
    {isCorrect?"CORRECT!":"WRONG"} <br/>
    {questionExplanation} <br/>
    </p>
    <button onClick={onNext} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-colors duration-150">Next</button>
    </div>
)
}

export default QuizExp;