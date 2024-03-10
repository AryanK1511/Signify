import React,{useState} from "react";
import QuizQuestion from "./QuizQuestion";
import QuizOption from "./QuizOption";
import QuizExp from "./QuizExp";

const Quiz = () => {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [questionAnswered, setQuestionAnswered] = useState(false);
    return (
        <>
            <QuizQuestion questionIndex={questionIndex}/>
            <QuizOption option="TRUE"/>
            <QuizOption option="FALSE"/>
            {questionAnswered && <QuizExp questionIndex={questionIndex}/>}


        </>
    ) 



}

export default Quiz;