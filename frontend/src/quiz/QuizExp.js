import React from "react";

const QuizExp = ({ correctAnswer, selectedAnswer, onNext, questionExplanation }) => {
    const isCorrect = correctAnswer === selectedAnswer;
    return (
        <div className="flex flex-col items-center justify-center pt-5">
            <div className="text-center">
                <p className={`${isCorrect ? 'text-green-500' : 'text-red-500'} text-2xl md:text-5xl font-semibold`}>
                    {isCorrect ? "CORRECT!" : "WRONG"}
                </p>
                <p className="font-semibold text-xl md:text-3xl">
                    {questionExplanation}
                </p>
            </div>
            <button onClick={onNext} style={{ backgroundColor: '#31304D', color: '#F0ECE5' }} className="mt-5 px-4 py-2 text-4xl rounded-lg shadow hover:bg-blue-600 transition-colors duration-150">Next</button>
        </div>
    );
};

export default QuizExp;
