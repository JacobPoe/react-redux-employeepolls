import { _getQuestions, _getUsers } from '../_DATA';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export const RECEIVE_DATA = 'RECEIVE_DATA';
export const CAST_VOTE = 'CAST_VOTE';

function receiveData(users, questions) {
  return {
    type: RECEIVE_DATA,
    users,
    questions
  };
}

function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions
    })
  );
}

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveData(users, questions));
      dispatch(hideLoading());
    });
  };
}

function castVote({ userId, questionId, selectedOption, unselectedOption }) {
  return {
    type: CAST_VOTE,
    userId,
    questionId,
    selectedOption,
    unselectedOption
  };
}

export function handleCastVote(info) {
  console.log(info);
  return (dispatch) => {
    dispatch(castVote(info));
  };
}
