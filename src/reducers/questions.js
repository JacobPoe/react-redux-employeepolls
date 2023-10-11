import { ADD_QUESTION } from '../actions/questions';
import { CAST_VOTE, RECEIVE_DATA } from '../actions/shared';

export default function questions(state = {}, action) {
  switch (action.type) {
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question
      };
    case CAST_VOTE: {
      console.log(state, action);
      return {
        ...state,
        [action.info.qid]: {
          ...state[action.info.qid],
          [action.info.answer]: {
            ...state[action.info.qid][action.info.answer],
            votes: state[action.info.qid][action.info.answer].votes.concat([
              action.info.user.id
            ])
          }
        }
      };
    }
    case RECEIVE_DATA:
      return action.questions;
    default:
      return state;
  }
}
