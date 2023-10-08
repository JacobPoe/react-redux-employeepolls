import { CAST_VOTE, RECEIVE_DATA } from '../actions/shared';

export default function questions(state = [], action) {
  console.log(state);
  switch (action.type) {
    case CAST_VOTE:
      return {
        ...state,
        [action.questionId]: {
          ...state[action.questionId],
          [action.selectedOption]: {
            ...state[action.questionId][action.selectedOption],
            votes: state[action.questionId][action.selectedOption].votes.concat(
              action.userId
            )
          }
        }
      };
    case RECEIVE_DATA:
      return action.questions;
    default:
      return state;
  }
}
