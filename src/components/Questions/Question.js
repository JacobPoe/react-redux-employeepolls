import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Image } from 'react-bootstrap';

import { checkIsAnswered } from '../../actions/questions';

import PollingBooth from '../Polls/PollingBooth';
import ResultsBoard from '../Polls/ResultsBoard';
import FourOhFour from '../404';

const Question = (props) => {
  const { id } = useParams();
  const question = props.questions[id];
  const totalVoteCount = question
    ? question.optionOne.votes.length + question.optionTwo.votes.length
    : undefined;

  const time = new Date(question?.timestamp)
    .toLocaleDateString('en-us')
    .toString();

  return !question ? (
    <FourOhFour />
  ) : (
    <>
      <div className="poll-header">
        <Image src={`${props.users[question.author].avatarURL}`} thumbnail />
        <h3>
          {props.users[question.author].name} | @{question.author}
        </h3>
        <h5>{time}</h5>
      </div>
      <h3>WOULD YOU RATHER</h3>
      <br />
      {checkIsAnswered(question, props.authedUser.id) ? (
        <ResultsBoard question={question} totalVoteCount={totalVoteCount} />
      ) : (
        <PollingBooth
          poll={{ question: question, totalVoteCount: totalVoteCount }}
        />
      )}
      <hr />
      <h6>
        {question.optionOne.votes.includes(props.authedUser.id) ||
        question.optionTwo.votes.includes(props.authedUser.id)
          ? 'Your vote has been cast!'
          : 'You can still vote! Select an option now!'}
      </h6>
      <h6>{question.id}</h6>
    </>
  );
};

export default connect((state) => ({
  authedUser: state.authedUser,
  users: state.users,
  questions: state.questions
}))(Question);
