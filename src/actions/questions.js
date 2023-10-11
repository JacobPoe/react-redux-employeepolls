export const ADD_QUESTION = 'ADD_QUESTION';

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  };
}

export function checkIsAnswered(question, userId) {
  // Combine the arrays of voters for each option
  // into one array
  const voters = [...question.optionOne.votes, ...question.optionTwo.votes];

  // Return whether or not the voters array
  // includes the logged-in user's ID
  return voters.includes(userId);
}
