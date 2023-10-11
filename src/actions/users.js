import { _saveQuestionAnswer } from '../_DATA';
import { CAST_VOTE } from './shared';

export const SET_USERS = 'SET_USERS';

export function setUsers(users) {
  return {
    type: SET_USERS,
    users
  };
}

export async function saveQuestionAnswer(info) {
  return await _saveQuestionAnswer(info);
}

function castVote(info) {
  return {
    type: CAST_VOTE,
    info
  };
}

export function handleCastVote(info) {
  return (dispatch) => {
    return dispatch(castVote(info));
  };
}
