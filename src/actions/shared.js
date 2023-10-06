import { _getQuestions, _getUsers } from '../_DATA';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export const RECEIVE_DATA = 'RECEIVE_DATA';

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
