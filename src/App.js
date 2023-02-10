import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchJokeSuccess, fetchJokeFailure } from './actions';
import Button from "./Button";

const App = ({ joke, fetchJokeSuccess, fetchJokeFailure }) => {
  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(data => {
        fetchJokeSuccess(data.value);
      })
      .catch(error => {
        fetchJokeFailure(error);
      });
  }, []);

  return (
    <div>
      <div key={joke}>
      <p>{joke}</p>
      </div>
      
      <Button />
    </div>
  );
};

const mapStateToProps = state => ({
  joke: state.joke
});

const mapDispatchToProps = dispatch => ({
  fetchJokeSuccess: joke => dispatch(fetchJokeSuccess(joke)),
  fetchJokeFailure: error => dispatch(fetchJokeFailure(error))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);