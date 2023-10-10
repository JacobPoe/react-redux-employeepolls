import { ADD_QUESTION } from '../actions/questions';
import { CAST_VOTE, RECEIVE_DATA } from '../actions/shared';

export default function questions(state = [], action) {
  switch (action.type) {
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question
      };
    case CAST_VOTE:
      return state;
    case RECEIVE_DATA:
      return action.questions;
    default:
      return state;
  }
}
