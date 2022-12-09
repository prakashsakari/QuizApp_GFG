export const authReducer = (state, {type, payload}) => {
    switch (type){

        case "INITIAL_STATE":
            return {
                ...state,
                token: payload
            }

        case "USERNAME":
            return {
                ...state,
                username: payload
            }
        case "PASSWORD":
            return {
                ...state,
                password: payload
            }
        
        case "CLEAR_CREDENTIALS":
            return {
                ...state,
                username: "",
                password: ""
            }
        case "TOKEN":
            return {
                ...state,
                token: payload
            }
        default:
            return state
    }
}