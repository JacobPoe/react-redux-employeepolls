import { _getQuestions, _getUsers } from '../_DATA';

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
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveData(users, questions));
    });
  };
}

function castVote(info) {
  return {
    type: CAST_VOTE,
    info
  };
}

export function handleCastVote(info) {
  console.log('handleCastVote: ', info);
  return (dispatch) => {
    dispatch(castVote(info));
  };
}
