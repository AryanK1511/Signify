import React from "react";

const QuizExp = ({correctAnswer, selectedAnswer, onNext}) => {
return(
    <>
    EXPLANATION <br/>
    <button onClick={onNext}>Next</button>
    </>
)
}

export default QuizExp;