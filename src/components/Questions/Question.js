import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import Ballot from '../Polls/Ballot';
import Result from '../Polls/Result';
import FourOhFour from '../404';

const Question = (props) => {
  const { id } = useParams();
  const question = props.questions[id];
  const totalVoteCount =
    question.optionOne.votes.length + question.optionTwo.votes.length;

  const time = new Date(question.timestamp)
    .toLocaleDateString('en-us')
    .toString();

  return !question ? (
    <FourOhFour />
  ) : (
    <>
      <div className="poll-header">
        <h3>
          {props.users[question.author].name} | @{question.author}
        </h3>
        <h5>{time}</h5>
      </div>
      {id ? (
        <div className="result-row">
          <Result
            optionKey={1}
            option={question.optionOne}
            totalVoteCount={totalVoteCount}
          />
          <Result
            optionKey={2}
            option={question.optionTwo}
            totalVoteCount={totalVoteCount}
          />
        </div>
      ) : (
        <div className="ballot-row">
          <Ballot
            optionKey={1}
            option={question.optionOne}
            totalVoteCount={totalVoteCount}
          />
          <Ballot
            optionKey={2}
            option={question.optionTwo}
            totalVoteCount={totalVoteCount}
          />
        </div>
      )}
      <hr />
      <h6>
        {question.optionOne.votes.includes(props.authedUser.id) ||
        question.optionTwo.votes.includes(props.authedUser.id)
          ? 'You have already cast your vote.'
          : 'You can still vote! Select an option now!'}
      </h6>
    </>
  );
};

export default connect((state) => ({
  authedUser: state.authedUser,
  users: state.users,
  questions: state.questions
}))(Question);
