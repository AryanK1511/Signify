import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import QuizQuestion from "./QuizQuestion";
import QuizOption from "./QuizOption";
import QuizExp from "./QuizExp";


const QUESTIONS = [
  {
    text: "Sharks are mammals",
    answer: false,
    explanation: "Sharks are considered to be fish",
  },
  {
    text: "Apples and pears are a part of the rose family",
    answer: true,
    explanation: "They are! So are peaches and plums",
  },
  {
    text: "An octopus has three hearts",
    answer: true,
    explanation: "Octopus has one main, and two additional hearts",
  },
  // { text: "Goldfish have a two second memory", answer: false, explanation: "Their memories can actually last for months" },
  // { text: "The first animal sent into space was a monkey", answer: false, explanation: "Correct! So are peaches and plums" },
  // { text: "Hot and cold water sound the same when poured", answer: false, explanation: "They sound different due to the fact that hot water has a higher viscosity than cold water" },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const navigate = useNavigate();

  const handleAnswerSelect = (answer) => {
    console.log(answer);
    setSelectedAnswer(answer);
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < QUESTIONS.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Handle quiz end - for simplicity, we'll just reset

      setCurrentQuestion(0);
      //GO BACK TO HOMEPAGE
      navigate('/');
    }
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  // Quiz is over
  if (currentQuestion == QUESTIONS.length) {
    return (
      <div className="p-11 flex flex-col items-center justify-center min-h-screen ">
        <QuizQuestion questionText="Thanks for taking the quiz!"/><br />
        <button onClick={handleNextQuestion} style={{ backgroundColor: '#31304D', color: '#F0ECE5' }} className="mt-5 px-4 py-2 text-4xl rounded-lg shadow hover:bg-blue-600 transition-colors duration-150">Back to Home</button>

      </div>
    );
  }

  // Quiz is active
  return (
    <div className="p-11 flex flex-col items-center justify-center min-h-screen ">
      <QuizQuestion
        questionIndex={currentQuestion}
        questionText={QUESTIONS[currentQuestion].text}
      />
      <div className="options flex justify-center gap-4">
        <QuizOption
          option={true}
          onSelect={handleAnswerSelect}
          isSelected={selectedAnswer === true}
        />
        <QuizOption
          option={false}
          onSelect={handleAnswerSelect}
          isSelected={selectedAnswer === false}
        />
      </div>
      <br />
      {showExplanation && (
        <QuizExp
          correctAnswer={QUESTIONS[currentQuestion].answer}
          selectedAnswer={selectedAnswer}
          questionExplanation={QUESTIONS[currentQuestion].explanation}
          onNext={handleNextQuestion}
          className="flex flex-col items-center justify-center min-h-screen"
        />
      )}
    </div>
  );
};

export default Quiz;
