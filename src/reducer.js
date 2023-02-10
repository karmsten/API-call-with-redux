import {
    FETCH_JOKE_SUCCESS,
    FETCH_JOKE_FAILURE
  } from './actionTypes';
  
  const initialState = {
    joke: '',
    error: ''
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_JOKE_SUCCESS:
        return {
          ...state,
          joke: action.payload
        };
      case FETCH_JOKE_FAILURE:
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default reducer;