import { CAST_VOTE, RECEIVE_DATA } from '../actions/shared';

export default function users(state = [], action) {
  switch (action.type) {
    case CAST_VOTE:
      return state;
    case RECEIVE_DATA:
      return action.users;
    default:
      return state;
  }
}
