export const quizReducer = (state, { type, payload }) => {
    switch(type){
        case "INITIAL_STATE":
            return {
                ...state,
                index: payload.currentIndex,
                score: payload.currentScore,
                selectedOption: payload.currentOption === "null" ? null : payload.currentOption,
                quizCategory: payload.currentCategory,
                quiz: payload.currentQuiz
            }

        case "SET_QUIZ":
            return {
                ...state,
                quiz: payload
            }

        case "CATEGORY":
            return {
                ...state,
                quizCategory: payload
            }
        case "NEXT_QUESTION":
            return {
                ...state,
                index: state.index + 1,
                selectedOption: null
            }
        case "SUBMIT":
            return {
                ...state,
                selectedOption: null
            }
        case "QUIT":
            return {
                ...state,
                index: 0,
                score: 0,
                selectedOption: null
            }
        case "SET_SELECTED_OPTION":
            return {
                ...state,
                selectedOption: payload.optionId,
                score: payload.isCorrect ? state.score + 5 : state.score
            }
        default:
            return state
    }
}