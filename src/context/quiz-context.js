import { createContext, useContext, useReducer, useEffect } from "react";
import { quizReducer } from "../reducer/quiz-reducer";

const initialState = {
    index: 0,
    score: 0,
    quizCategory: "",
    selectedOption: "",
    quiz: []
}

const QuizContext = createContext();

const QuizProvider = ({children}) => {

    const [{ index, score, quizCategory, selectedOption, quiz }, quizDispatch ] = useReducer(quizReducer, initialState);

    useEffect(() => {
        const currentIndex = Number(localStorage.getItem("index"));
        const currentScore = Number(localStorage.getItem("score"));
        const currentOption = localStorage.getItem("option");
        const currentCategory = localStorage.getItem("category");
        const currentQuiz = JSON.parse(localStorage.getItem("quiz"));
        localStorage.setItem("quiz", JSON.stringify(currentQuiz))
        quizDispatch({
            type: "INITIAL_STATE",
            payload: { currentIndex, currentOption, currentScore, currentCategory, currentQuiz }
        })
    }, [])

    return (
        <QuizContext.Provider value={{ index, score, quizCategory, selectedOption, quiz, quizDispatch }}>
            {children}
        </QuizContext.Provider> 
    )
}

const useQuiz = () =>  useContext(QuizContext);
export { useQuiz, QuizProvider }