import { CAST_VOTE, RECEIVE_DATA } from '../actions/shared';

export default function users(state = {}, action) {
  switch (action.type) {
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
