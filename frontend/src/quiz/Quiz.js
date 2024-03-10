import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
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
      alert("Quiz completed! Restarting.");
      setCurrentQuestion(0);
      //GO BACK TO HOMEPAGE
    }
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  // Quiz is over
  if (currentQuestion == QUESTIONS.length) {
    return (
      <>
        Thanks for taking the quiz <br />
        <button onClick={handleNextQuestion}>Back to home</button>
      </>
    );
  }

  // Quiz is active
  return (
    <div className="quiz max-w-lg mx-auto p-4">
      <QuizQuestion
        questionIndex={currentQuestion}
        questionText={QUESTIONS[currentQuestion].text}
      />
      <div className="options">
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
        />
      )}
    </div>
  );
};

export default Quiz;
