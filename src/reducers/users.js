import { CAST_VOTE, RECEIVE_DATA } from '../actions/shared';
import { ADD_QUESTION } from '../actions/questions';

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
        [action.info.userId]: {
          ...state[action.info.userId],
          answers: {
            ...state[action.info.userId].answers,
            [action.info.questionId]: action.info.selectedOption
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
