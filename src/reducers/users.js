import { CAST_VOTE, RECEIVE_DATA } from '../actions/shared';

export default function users(state = {}, action) {
  switch (action.type) {
    case CAST_VOTE: {
      // const user = {
      //   ...state[action.info.userId],
      //   ...state[action.info.userId].answers {

      //   }
      // };
      // console.log(user);

      return state;
    }
    case RECEIVE_DATA:
      return action.users;
    default:
      return state;
  }
}
