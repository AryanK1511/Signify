import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import QuizQuestion from "./QuizQuestion";
import QuizOption from "./QuizOption";
import QuizExp from "./QuizExp";
import { useAtom } from "jotai";
import { gestureAtom } from "../store";

// ===== Questions =====
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
  }
];

// ===== Quiz Component =====
const Quiz = () => {
  // State to hold the data received from the server
  const [gesture] = useAtom(gestureAtom);

  // State to manage the quiz
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  
  // Navigate to the next question
  const navigate = useNavigate();

  // Set up the WebSocket connection and event listeners
  useEffect(() => {
    if (gesture !== null) {
      switch (gesture.toLowerCase()) {
        case "thumb_up":
          handleAnswerSelect(true);
          break;
        case "thumb_down":
          handleAnswerSelect(false);
          break;
        case "open_palm":
          handleNextQuestion();
          break;
        default:
          console.log("No gesture recognized");
      }
    }
  }, [gesture])

  // Event handlers
  const handleAnswerSelect = (answer) => {
    console.log(answer);
    setSelectedAnswer(answer);
    setShowExplanation(true);
  };

  // Navigate to the next question
  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
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
    }
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
