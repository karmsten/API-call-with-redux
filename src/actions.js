import {
    FETCH_JOKE_SUCCESS,
    FETCH_JOKE_FAILURE
  } from './actionTypes';
  
  export const fetchJokeSuccess = joke => ({
    type: FETCH_JOKE_SUCCESS,
    payload: joke
  });
  
  export const fetchJokeFailure = error => ({
    type: FETCH_JOKE_FAILURE,
    payload: error
  });