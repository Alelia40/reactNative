import { combineReducers } from "redux";

const initialState = {
    data: [],
    requesting: false,
    error: null
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_MOVIES_PENDING":
            return { ...state, requesting: true };
        case "GET_MOVIES_DONE":
            return { ...state, requesting: false, movies: action.payload };
        case "GET_MOVIES_ERR":
            return { ...state, requesting: false, error: action.payload };
        case "GET_DETAILS_PENDING":
            return { ...state, requesting: true };
        case "GET_DETAILS_DONE": 
            return { ...state, requesting: false, detail: action.payload };
        case "GET_DETAILS_ERR":
            return { ...state, requesting: false, error: action.payload };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    movieReducer
})

export default rootReducer;