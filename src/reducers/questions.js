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
      const question = { ...state[action.info.questionId] };

      switch (action.info.selectedOption) {
        case 'optionOne': {
          return voteOptionOne(state, question, action.info.userId);
        }
        case 'optionTwo': {
          return voteOptionTwo(state, question, action.info.userId);
        }
        default: {
          return state;
        }
      }
    }
    case RECEIVE_DATA:
      return action.questions;
    default:
      return state;
  }
}

function voteOptionOne(state = {}, question, userId) {
  const castVote = {
    ...state,
    [question.id]: {
      ...state[question.id],
      optionOne: {
        votes: [...state[question.id].optionOne.votes.concat([userId])],
        text: state[question.id].optionOne.text
      },
      optionTwo: {
        ...state[question.id].optionTwo
      }
    }
  };

  return castVote;
}

function voteOptionTwo(state = {}, question, userId) {
  const castVote = {
    ...state,
    [question.id]: {
      ...state[question.id],
      optionOne: {
        ...state[question.id].optionOne
      },
      optionTwo: {
        votes: [...state[question.id].optionTwo.votes.concat([userId])],
        text: state[question.id].optionTwo.text
      }
    }
  };

  return castVote;
}
