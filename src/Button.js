import React from "react";
import { connect } from "react-redux";
import { fetchJokeSuccess, fetchJokeFailure } from "./actions";

const Button = ({ fetchJokeSuccess }) => {
    return (
        <button onClick={fetchJokeSuccess}>
            Generate new Joke
        </button>
    );
};

const mapDispatchToProps = dispatch => ({
    fetchJokeSuccess: () => {
      fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
          dispatch(fetchJokeSuccess(data.value));
        })
        .catch(error => {
          dispatch(fetchJokeFailure(error));
        });
    }
  });

export default connect(null, mapDispatchToProps)(Button);