import { RECEIVE_DATA } from '../actions/shared';
import { ADD_QUESTION } from '../actions/questions';
import { CAST_VOTE } from '../actions/shared';

export default function users(state = {}, action) {
  switch (action.type) {
    case ADD_QUESTION: {
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: [
            ...state[action.question.author].questions.concat([
              action.question.id
            ])
          ]
        }
      };
    }
    case CAST_VOTE: {
      return {
        ...state,
        [action.info.user.id]: {
          ...state[action.info.user.id],
          answers: {
            ...state[action.info.user.id].answers,
            [action.info.qid]: action.info.answer
          }
        }
      };
    }
    case RECEIVE_DATA:
      return action.users;
    default:
      return state;
  }
}
