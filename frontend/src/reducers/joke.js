import { GET_JOKE, GET_JOKES, JOKE_ERROR, LOADING_TRUE } from "../actions/types";

const initialState = {
    joke: null,
    loading: true,
    jokes: [],
    error: {}
}

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_JOKE:
            return {
                ...state,
                joke: payload,
                loading: false
            }
        case LOADING_TRUE:
            return {
                ...state,
                loading: true
            }
        case GET_JOKES:
            return {
                ...state,
                joke: null,
                loading: false,
                jokes: payload,
            }
        case JOKE_ERROR:
            return {
                ...state,
                error: payload,
            }
        default: 
            return state;
    }
}